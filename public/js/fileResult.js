
const logoutBtn = document.getElementById("logout");
const detection = document.getElementById("detection");
const filenameInp = document.getElementById("filenameInp");
const malwareTypeInp = document.getElementById("malwareTypeInp");
const scanDate = document.getElementById("dateInp");
const scanTime = document.getElementById("timeInp");
const fileSizeInp = document.getElementById("fileSizeInp");
const links = document.getElementById("links");
const safeRecPoints = document.getElementById("safeRecPoints");
const resourcelinks = document.getElementById("resourcelinks");
const fileScanDetailsDiv = document.getElementById("fileScanDetails");
const fileFeatDetailsDiv = document.getElementById("fileFeatDetails");
const malwareTypeDiv = document.getElementById("malwareType");
const newScan = document.getElementById("newScan");



async function scanFile(e){
    try
    {
        const status = sessionStorage.getItem("status");
        const malwaretype = sessionStorage.getItem("malwaretype");
        const filename = sessionStorage.getItem("filename");
        const filesize = sessionStorage.getItem("filesize");
        const prevention = sessionStorage.getItem("prevention");
        const resourceLink = sessionStorage.getItem("resourceLink");
        const scandate = sessionStorage.getItem("scanDate");
        const scantime = sessionStorage.getItem("scanTime");
    

        detection.innerHTML = status;
        filenameInp.innerHTML = filename;
        scanDate.innerHTML = scandate;
        scanTime.innerHTML = scantime;
        malwareTypeInp.innerHTML = malwaretype;
        fileSizeInp.innerHTML = filesize;
        if(status == "benign")
        {
            detection.style.display = "block";
            detection.style.color = "white";
            detection.style.backgroundColor = "green";
            detection.style.border = "2px solid green";
            fileScanDetailsDiv.style.display="none";
            fileFeatDetailsDiv.style.marginLeft = "35px";
            fileFeatDetailsDiv.style.width = "96%";
            malwareTypeInp.style.display = "none";
            malwareTypeDiv.style.display = "none";
        }
        else if(status == "malware")
        {
            detection.style.display = "block";
            detection.style.color = "white";
            detection.style.backgroundColor = "red";
            detection.style.border = "2px solid red";
            links.style.display = "block";
            let recommendation = document.createElement("li");
            recommendation.textContent = prevention;
            safeRecPoints.appendChild(recommendation);  
            let resource = document.createElement("li");
            let resourcelink = document.createElement("a");
            resourcelink.textContent = resourceLink;
            resourcelink.href = resourceLink;
            resourcelink.target = "_blank";
            resource.appendChild(resourcelink);
            resourcelinks.appendChild(resource);     
        }
    }catch (error) {
        console.error('Error:', error);
    }

}

function init(){
    scanFile()
    logoutBtn.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = 'index.html';
    })
    newScan.addEventListener("click",function(){
        window.location.href = 'scanFile.html';
    })
}


window.onload = init() ;