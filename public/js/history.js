
const logoutBtn = document.getElementById("logout");
const historyDropdown = document.getElementById("historyDropdown");
const historyTable = document.getElementById("historyTable");

async function setUrlHistory(){
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
            for(let i=0; i < data.length; i++){
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
            for(let i=0; i < data.length; i++){
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
    logoutBtn.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = 'index.html';
    });
    historyDropdown.addEventListener("change",function(){
        if(historyDropdown.value == "url"){
            while (historyTable.rows.length > 0) {
                historyTable.deleteRow(0);
            }
            setUrlHistory();
        }
        else if(historyDropdown.value == "file"){
            while (historyTable.rows.length > 0) {
                historyTable.deleteRow(0);
            }
            setFileHistory();
        }
    })
}

window.onload = init() ;