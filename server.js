const express = require('express');
const path = require('path');
const connectionPool = require('./config/database');
const bodyParser = require('body-parser');
const multer = require('multer');
const { error } = require('console');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');


//for file uploads
const upload = multer();

//create a new instance of an express application
const app = express();

//to serve files from the public folder
app.use(express.static(path.join(__dirname,'public')));

//needed to parse incoming JSON data
app.use(bodyParser.json());
app.use(express.json());


app.post('/login',(req, res) => {
    connectionPool.getConnection((err,connection) => {
        if(err){
            return res.status(400).send({message:'Database connection unsuccessful'});
        }
        else{
            console.log("Database connection successful");
            const{username,password} = req.body;
            const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
            connection.query(query,[username,password],(err,result) =>{
                if(err)
                {
                    return res.status(400).send({message:'Error performing query'});
                }
                else{
                    if(result.length === 1){
                        return res.status(200).send({message:'Login successful'});
                    }
                    else{
                        return res.status(400).send({message:'Invalid username/password'});
                    }
                }
            });
        }
        connection.release();
    });
});

app.post('/signup',(req, res) => {
    connectionPool.getConnection((err,connection) => {
        if(err){
            return res.status(400).send({message:'Database connection unsuccessful'});
        }
        else{
            console.log("Database connection successful");
            const{fName, lName, emailS, uNameS, pwdS} = req.body;
            const sqlQuery = 'INSERT INTO users(firstName,lastName,email,username,password,userRole) VALUES (?,?,?,?,?,"client")';
            connection.query(sqlQuery,[fName, lName, emailS, uNameS, pwdS],(err,result) =>{
            
                if(err)
                {
                    return res.status(400).send({message:'Error performing query'});
                }
                else{
                    return res.status(200).send({message:'Registration successful'});
                }

            });
        }
        connection.release();
    });
});

app.post('/scanfile', upload.single('file'), (req, res) => {
    if (!req.file){
        return res.status(400).send({message:'Upload unsuccessful'});
    }
    else{
        const file = req.file;
        const fileName = req.file.originalname;
        const userId = req.body.userId;
        
        const formData = new FormData();
        //console.log(fileData)
        formData.append("file", file.buffer, {
            filename: fileName,
        });
        const options = {
            headers: {
               'Content-Type': `multipart/form-data`,
            }
        };
        axios.post('http://127.0.0.1:5000/predictPeFile',formData,options)
        .then((response) => {
            const {status,malwaretype,filename,filesize,prevention,resourceLink} = response.data;
            const date = new Date()
            const day = date.getDate();
            const month =  date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const mins = date.getMinutes();
            const secs = date.getSeconds();
            const scanDate = String(day)+ "/" + String(month) + "/" + String(year);
            const scanTime = String(hours)+ ":" + String(mins) + ":" + String(secs);
            const data = {
                status:status,
                malwaretype: malwaretype,
                filename:filename,
                filesize:filesize,
                prevention:prevention,
                resourceLink:resourceLink,
                scanDate:scanDate,
                scanTime:scanTime
            }
            connectionPool.getConnection((err,connection) => {
                if(err){
                    return res.status(400).send({message:'Database connection for file history is unsuccessful'});
                }
                else{
                    const query = 'INSERT INTO fileHistory(userID,fileName,scanDate,scanResult) VALUES (?,?,?,?)';
                    connection.query(query,[userId, filename, scanDate, status],(err,result) =>{
                        if(err)
                        {
                          return res.status(400).send({message:'Error performing query'});
                        }
                    });
                }
                connection.release();
            });
            return  res.status(200).json(data);
            return  res.status(200).json(data);
        })
        .catch((error) => {
            console.error('Error connecting to the Python script:', error.message);
        });    
    }
});

app.post('/userDetails',(req, res) => {
    connectionPool.getConnection((err,connection) => {
        if(err){
            return res.status(400).send({message:'Database connection unsuccessful'});
        }
        else{
            const {username} = req.body;
            const query = 'SELECT userID,firstName,lastName,email,userRole FROM users WHERE username = ?';
            connection.query(query,[username],(err,result) =>{
                if(result.length === 1){
                    return res.status(200).send(result[0]);
                }
                else{
                    return res.status(400).send({message:'Error performing query'});
                }
            });

        }
        connection.release();
    });
});

app.post('/scanURL',(req, res) => {
    const {scanurl,userId} = req.body;
    const options = {
        headers: {
          'Content-Type': 'application/json',
        },
    };
    axios.post('http://127.0.0.1:5000/predicturl',scanurl,options)
    .then((response) => {
        const {url,status,urlLength,hostname,path,noOfDigits,noOfLetters} = response.data;
        const date = new Date()
        const day = date.getDate();
        const month =  date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const secs = date.getSeconds();
        const scanDate = String(day)+ "/" + String(month) + "/" + String(year);
        const scanTime = String(hours)+ ":" + String(mins) + ":" + String(secs);
        const data = {
            url:url,
            status: status,
            urlLength:urlLength,
            hostname:hostname,
            path:path,
            noOfDigits:noOfDigits,
            noOfLetters:noOfLetters,
            scanDate:scanDate,
            scanTime:scanTime
        }
        connectionPool.getConnection((err,connection) => {
            if(err){
                return res.status(400).send({message:'Database connection for URL history is unsuccessful'});
            }
            else{
                const {username} = req.body;
                const query = 'INSERT INTO urlHistory(userID,url,scanDate,scanResult) VALUES (?,?,?,?)';
                connection.query(query,[userId, url, scanDate, status],(err,result) =>{
                    if(err)
                    {
                      return res.status(400).send({message:'Error performing query'});
                    }
                });
            }
            connection.release();
        });
        return  res.status(200).json(data);
    })
    .catch((error) => {
        console.error('Error connecting to the Python script:', error.message);
        return res.status(400).send({message:'Error performing scan'});
    });
});

app.post('/setUrlHistory',(req, res) => {
    connectionPool.getConnection((err,connection) => {
        if(err){
            return res.status(400).send({message:'Database connection unsuccessful'});
        }
        else{
            const {userId} = req.body;
            const query = 'SELECT url,scanDate,scanResult FROM urlHistory WHERE userID = ?';
            connection.query(query,[userId],(err,result) =>{
               // return res.status(200).send(result);
                if(result.length > 0){
                    return res.status(200).send(result);
                }
                else if(result.length == 0){
                    return res.status(200).send({message:'No url history found.'});
                }
                else{
                    return res.status(400).send({message:'Error performing query.'});
                }
            });

        }
        connection.release();
    });
});

app.post('/setFileHistory',(req, res) => {
    connectionPool.getConnection((err,connection) => {
        if(err){
            return res.status(400).send({message:'Database connection unsuccessful'});
        }
        else{
            const {userId} = req.body;
            const query = 'SELECT fileName,scanDate,scanResult FROM fileHistory WHERE userID = ?';
            connection.query(query,[userId],(err,result) =>{
               // return res.status(200).send(result);
                if(result.length > 0){
                    return res.status(200).send(result);
                }
                else if(result.length == 0){
                    return res.status(200).send({message:'No file history found.'});
                }
                else{
                    return res.status(400).send({message:'Error performing query.'});
                }
            });

        }
        connection.release();
    });
});

app.listen(3000,() =>{
    console.log("Server listening on port 3000");
})