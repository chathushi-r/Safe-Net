
const username = document.getElementById("username");
const userid= document.getElementById("userID");
const fname = document.getElementById("fName");
const lname = document.getElementById("lName");
const email = document.getElementById("email");
const userRole = document.getElementById("userrole");
const welcomefName = document.getElementById("welcomefName");
const logoutBtn = document.getElementById("logout");
const historyDropdown = document.getElementById("historyDropdown");
const historyTable = document.getElementById("historyTable");
const fullHistoryBtn = document.getElementById("historyBtn");

const abtIcon = document.getElementById("abticon");
const abtDesc = document.getElementById("abtDesc");
const abtBtn = document.getElementById("abtBtn");
const errMsgHistory = document.getElementById("errMsgHistory");


async function setUserDetails(){
    const setUsername = sessionStorage.getItem("enteredUsername");
    username.innerHTML = setUsername;

    const res = await fetch('/userDetails',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:setUsername
        })    
    });
    if(res.ok){
        const data = await res.json();
        userid.innerHTML = data.userID;
        fname.innerHTML = data.firstName;
        lname.innerHTML = data.lastName;
        email.innerHTML = data.email;
        userRole.innerHTML = data.userRole
        welcomefName.innerHTML = data.firstName;
        if(data.userRole == "admin"){
            setEvalutiondiv();
        }
        sessionStorage.setItem("userID",data.userID);
    }
    else{
        const errdata = await res.json();
        window.alert(errdata.message);
    }

}

function setEvalutiondiv(){
    abtIcon.className = "fa-solid fa-square-poll-vertical";
    abtDesc.innerHTML="View the dataset evaluation of the machine learning models such as accuracy rates, specificity rates, sensitivity rates, classification report (recall score, f1 score, precision score), confusion matrix and etc...";
    abtBtn.innerHTML = "CLICK TO VIEW"
    abtBtn.href = "evaluation.html"
}

async function seturlHistory(){
    const userID = sessionStorage.getItem("userID");
    const res = await fetch('/setUrlHistory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId:userID
        })    
    });
    if(res.ok){
        const data = await res.json();
        if(data.length > 0){
            let count = 0;
            let headingRow = historyTable.insertRow();
            const hd1 = document.createElement('th');
            hd1.textContent = 'URL';
            const hd2 = document.createElement('th');
            hd2.textContent = 'Date of scan';
            const hd3 = document.createElement('th');
            hd3.textContent = 'Scan Result';
            headingRow.append(hd1);
            headingRow.append(hd2);
            headingRow.append(hd3);
            for(let i=data.length-1; i >=0 && count < 2;i--){
                let newRow = historyTable.insertRow();
                let data1 = document.createElement('td');
                data1.textContent = data[i].url;
                let data2 = document.createElement('td');
                data2.textContent = data[i].scanDate;
                let data3 = document.createElement('td');
                data3.textContent = data[i].scanResult;
    
                newRow.append(data1);
                newRow.append(data2);
                newRow.append(data3);
                count++;
            }
        }
        else{
            errMsgHistory.style.display = "block";
            errMsgHistory.textContent = data.message;
        }
        
    }
    else{
        const errdata = await res.json();
        window.alert(errdata.message);
    }

}

async function setFileHistory(){
    const userID = sessionStorage.getItem("userID");
    const res = await fetch('/setFileHistory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId:userID
        })    
    });
    if(res.ok){
        const data = await res.json();
        if(data.length > 0){
            let count = 0;
            let headingRow = historyTable.insertRow();
            const hd1 = document.createElement('th');
            hd1.textContent = 'File name';
            const hd2 = document.createElement('th');
            hd2.textContent = 'Date of scan';
            const hd3 = document.createElement('th');
            hd3.textContent = 'Scan Result';
            headingRow.append(hd1);
            headingRow.append(hd2);
            headingRow.append(hd3);
            for(let i=data.length-1; i >=0 && count < 2;i--){
                let newRow = historyTable.insertRow();
                let data1 = document.createElement('td');
                data1.textContent = data[i].fileName;
                let data2 = document.createElement('td');
                data2.textContent = data[i].scanDate;
                let data3 = document.createElement('td');
                data3.textContent = data[i].scanResult;
    
                newRow.append(data1);
                newRow.append(data2);
                newRow.append(data3);
                count++;
            }
        }
        else{
            errMsgHistory.style.display = "block";
            errMsgHistory.textContent = data.message;
        }
        
    }
    else{
        const errdata = await res.json();
        window.alert(errdata.message);
    }

}
function init(){
    setUserDetails()
    logoutBtn.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = 'index.html';
    });
    historyDropdown.addEventListener("change",function(){
        if(historyDropdown.value == "url"){
            while (historyTable.rows.length > 0) {
                historyTable.deleteRow(0);
            }
            seturlHistory();
        }
        else if(historyDropdown.value == "file"){
            while (historyTable.rows.length > 0) {
                historyTable.deleteRow(0);
            }
            setFileHistory();
        }
    })
    fullHistoryBtn.addEventListener("click",function(){
        window.location.href = "history.html";
    })
}


window.onload = init() ;



