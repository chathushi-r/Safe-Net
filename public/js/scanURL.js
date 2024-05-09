
const urlform = document.getElementById("urlForm");
const logoutBtn = document.getElementById("logout");
const scanUrlSubmitBtn = document.getElementById("scanURL");
const urlInput = document.getElementById("inputurl");


async function getURLScanResult(e){
    e.preventDefault();
    const userID = sessionStorage.getItem("userID");
    const scanUrl = urlInput.value;
    try{
        const res = await fetch('/scanURL',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                scanurl:scanUrl,
                userId:userID
            })    
        })
        if(res.ok){
            const {url,status,urlLength,hostname,path,noOfDigits,noOfLetters,scanDate,scanTime} = await res.json();
            sessionStorage.setItem("url",url);
            sessionStorage.setItem("status",status);
            sessionStorage.setItem("urlLength",urlLength);
            sessionStorage.setItem("hostname",hostname);
            sessionStorage.setItem("path",path);
            sessionStorage.setItem("noOfDigits",noOfDigits);
            sessionStorage.setItem("noOfLetters",noOfLetters);
            sessionStorage.setItem("scanDate",scanDate);
            sessionStorage.setItem("scanTime",scanTime);
            window.location.href = 'urlResult.html';
        }
        else{
            const errdata = await res.json();
            window.alert(errdata.message);
        }
    }catch (error) {
        console.error('Error:', error);
    }
}

function checkUrlInput(event){
    if(urlInput.value.trim() != ''){
        scanUrlSubmitBtn.removeAttribute('disabled');
        scanUrlSubmitBtn.style.background = "#2f8aa8";
        scanUrlSubmitBtn.style.cursor = "pointer";
        scanUrlSubmitBtn.style.border = "black";
    }else if(urlInput.value.trim() == ''){
        scanUrlSubmitBtn.setAttribute('disabled','disabled');
        scanUrlSubmitBtn.style.background = "#aaa";
        scanUrlSubmitBtn.style.cursor = "default";
        scanUrlSubmitBtn.style.border = "black";
    }
}

urlform.addEventListener("submit",getURLScanResult);
urlInput.addEventListener("input",checkUrlInput)
logoutBtn.addEventListener("click",function(){
    sessionStorage.clear();
    window.location.href = 'index.html';
});
