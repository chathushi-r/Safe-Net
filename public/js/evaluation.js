
const logoutBtn = document.getElementById("logout");
const evalDropdown = document.getElementById("evalDropdown");
const urlModelDiv = document.getElementById("urlModel");
const filescanModelDiv = document.getElementById("filescanModel");
const modelName = document.getElementById("modelName");



function init(){
    logoutBtn.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = 'index.html';
    });
    evalDropdown.addEventListener("change",function(){
        if(evalDropdown.value == "url"){
            filescanModelDiv.style.display="none";
            urlModelDiv.style.display = "block";
            modelName.textContent = "Random Forest";
        }
        else if(evalDropdown.value == "file"){
            urlModelDiv.style.display = "none";
            filescanModelDiv.style.display="block";
            modelName.textContent = "ResNet";
        }
    })
}

window.onload = init() ;