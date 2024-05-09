
const logoutBtn = document.getElementById("logout");
const uploadform = document.getElementById("uploadForm");
const inputFile = document.getElementById("inputFile");
const formContentArea = document.querySelector(".formContent");
const uploadedFileName = document.getElementById("fileName");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const uploadIcon = document.getElementById("uploadIcn");
const scanFileBtn = document.getElementById("scanFile");



formContentArea.addEventListener("click",() =>{
    inputFile.click();
});

async function scanFile(e){
    e.preventDefault();
    const userID = sessionStorage.getItem("userID");
    const formData = new FormData();
    formData.append('file',inputFile.files[0]);
    formData.append('userId',userID);
    try{
        const res = await fetch('/scanfile',{
            method:'POST',
            body: formData
        });
        if(res.ok){
            const {status,malwaretype,filename,filesize,prevention,resourceLink,scanDate,scanTime} = await res.json();
            sessionStorage.setItem("status",status);
            sessionStorage.setItem("malwaretype",malwaretype);
            sessionStorage.setItem("filename",filename);
            sessionStorage.setItem("filesize",filesize);
            sessionStorage.setItem("prevention",prevention);
            sessionStorage.setItem("resourceLink",resourceLink);
            sessionStorage.setItem("scanDate",scanDate);
            sessionStorage.setItem("scanTime",scanTime);
            window.location.href = 'fileResult.html';
            
        }
        else{
            const errdata = await res.json();
            window.alert(errdata.message);
        }
    }catch (error) {
        console.error('Error:', error);
    }
    
}

uploadform.addEventListener("submit",scanFile);

inputFile.addEventListener("input",function(){
    if(inputFile.files.length >  0){
        let filename = inputFile.files[0].name;
        uploadIcon.className = "fa-solid fa-file-circle-check";
        uploadPlaceholder.innerHTML = filename;
        inputFile.setAttribute("disabled", "true");
        formContentArea.style.cursor = "default";
        formContentArea.style.backgroundColor = "#aaaaaa18";
        uploadPlaceholder.style.color = "#aaa";
        uploadIcon.style.color = "#aaa";
        formContentArea.style.border = "2px dashed #aaaaaa2c";
        scanFileBtn.removeAttribute('disabled');
        scanFileBtn.style.background = "#2f8aa8"
        scanFileBtn.style.cursor = "pointer";
        scanFileBtn.style.border = "none"
    }else{
        uploadIcon.className = "fa-solid fa-file-arrow-up";
        uploadPlaceholder.innerHTML = "Click to browse file"
    }
})


logoutBtn.addEventListener("click",function(){
    sessionStorage.clear();
    window.location.href = 'index.html';
})

