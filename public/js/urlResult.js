
const logoutBtn = document.getElementById("logout");
const detection = document.getElementById("detection");
const scanResult = document.getElementById("statusOut");
const finalURL = document.getElementById("finalurl");
const scanDate = document.getElementById("dateInp");
const scanTime = document.getElementById("timeInp");
const urlLgth = document.getElementById("urlLengthOut");
const host = document.getElementById("hostOut");
const urlPath = document.getElementById("pathOut");
const urlDigits = document.getElementById("digitsOut");
const urlLetters = document.getElementById("lettersOut");
const links = document.getElementById("links");
const safeRecPoints = document.getElementById("safeRecPoints");
const resourcelinks = document.getElementById("resourcelinks");
const urlScanDetailsDiv = document.getElementById("urlScanDetails");
const urlFeatDetailsDiv = document.getElementById("urlFeatDetails");
const newTabIconSpan = document.getElementById("newTabIconSpan");
const newTabIcon = document.getElementById("newTabIcon");
const newScanBtn = document.getElementById("newScan");


const safetyRecommendations = ["Avoid clicking the link since doing so could expose you to malware infections, phishing scams, or other security risks.",
                               "If you received the link through a message/email, delete the message/email containing the malicious link to prevent any accidental clicks in the future.",
                               "Report the incident to the relevant authorities/website administrator, if the malicious link is related to a specific website/service."]

const resourceLinks = ["https://www.clearnetwork.com/malicious-urls/","https://cheapsslsecurity.com/blog/what-is-a-malicious-url/","https://www.mimecast.com/blog/what-are-malicious-websites/"]
const resourceNames = ["What Are Malicious URLs And Links? How To Identify And Fight Them.","What Is a Malicious URL? (And How You Can Avoid Them)","What Are Malicious Websites?"]

async function scanURL(e){
    try{
        const url = sessionStorage.getItem("url");
        const status = sessionStorage.getItem("status");
        const urlLength = sessionStorage.getItem("urlLength");
        const hostname = sessionStorage.getItem("hostname");
        const path = sessionStorage.getItem("path");
        const noOfDigits = sessionStorage.getItem("noOfDigits");
        const noOfLetters = sessionStorage.getItem("noOfLetters");
        const scandate = sessionStorage.getItem("scanDate");
        const scantime = sessionStorage.getItem("scanTime");

        detection.innerHTML = status;
        finalURL.innerHTML = url;
        scanDate.innerHTML = scandate;
        scanTime.innerHTML = scantime;
        urlLgth.innerHTML = urlLength;
        host.innerHTML = hostname;
        urlPath.innerHTML = path;
        urlDigits.innerHTML = noOfDigits;
        urlLetters.innerHTML = noOfLetters;
        if(status == "Benign")
        {
            detection.style.display = "block";
            detection.style.color = "white";
            detection.style.backgroundColor = "green";
            detection.style.border = "2px solid green";
            urlScanDetailsDiv.style.display="none";
            urlFeatDetailsDiv.style.marginLeft = "35px";
            urlFeatDetailsDiv.style.width = "96%";
            newTabIconSpan.style.display = "inline";
            newTabIcon.href = url;
            newTabIcon.target = "_blank";    
        }
        else if(status == "Malicious")
        {
            detection.style.display = "block";
            detection.style.color = "white";
            detection.style.backgroundColor = "red";
            detection.style.border = "2px solid red";
            links.style.display = "block";
            for(let i = 0; i < safetyRecommendations.length; i++){
                //console.log(safetyRecommendations[i])
                let recommendation = document.createElement("li");
                recommendation.textContent = safetyRecommendations[i];
                safeRecPoints.appendChild(recommendation);  
            }
            for(let i = 0; (i < resourceLinks.length && i < resourceNames.length) ; i++)
            {
                let resource = document.createElement("li");
                let resourcelink = document.createElement("a");
                resourcelink.textContent = resourceNames[i];
                resourcelink.href = resourceLinks[i];
                resourcelink.target = "_blank";
                resource.appendChild(resourcelink);
                resourcelinks.appendChild(resource);     
            }
        }
    
    }catch (error) {
        console.error('Error:', error);
    }

}

function init(){
    scanURL()
    logoutBtn.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = 'index.html';
    })
    newScanBtn.addEventListener("click",function(){
        window.location.href = 'scanURL.html';
    })
}


window.onload = init() ;