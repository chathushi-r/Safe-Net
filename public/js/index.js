
const loginBtn = document.getElementById("loginPage");
const closeBtnLogin = document.getElementById("closeBtnLogin");
const loginPopUpForm = document.getElementById("loginPopUpForm");

const signUpBtn = document.getElementById("signUpPage");
const closeBtnSignUp = document.getElementById("closeBtnSignUp");
const signUpPopUpForm = document.getElementById("signUpPopUpForm");

const contentSignUpbtn = document.getElementById("contentSignUpbtn");
const signUpBtn2 = document.getElementById("showSignUpForm");

const userLoginForm = document.getElementById("loginForm");

const signUpForm = document.getElementById("signUpForm");
const errorMsg = document.getElementById("errorMsg");
const SignupSuccessfulMsg = document.getElementById("SignupSuccessfulMsg");
const closeBtnMsg = document.getElementById("closeBtnMsg");
const rpwd = document.getElementById("rpwd");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email")
const uNameSignUp = document.getElementById("unameSignUp");
const pwdSignUp = document.getElementById("pwdSignUp");
const signUpSubmitBtn = document.getElementById("signup");
const errorMsgSignUp = document.getElementById("errorMsgSignUp");
const Uname = document.getElementById("uname");
const Pwd = document.getElementById("pwd");
const loginSubmitBtn = document.getElementById("login");



async function login(e){
    e.preventDefault();
    const uname = Uname.value;
    const pwd = Pwd.value;
    const res = await fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:uname,
            password:pwd 
        })    
    })
    if(res.ok){
        sessionStorage.setItem("enteredUsername",uname);
        window.location.href = 'home.html';
        userLoginForm.reset();
        
    }
    else{
        const errdata = await res.json();
        errorMsg.style.display = "block";
        errorMsg.innerHTML = errdata.message
        //window.alert(errdata.message);
    }
    
}

async function signUp(e){
    e.preventDefault();
    const fName = fname.value;
    const lName = lname.value;
    const emailS = email.value;
    const uNameS = uNameSignUp.value;
    const pwdS = pwdSignUp.value;
    console.log(fName)
    console.log(lName)
    console.log(emailS)
    console.log(uNameS)
    console.log(pwdS)

    try{
        const res = await fetch('/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fName, lName, emailS, uNameS, pwdS})
        });

        if(res.ok){
            signUpPopUpForm.style.display = "none";
            SignupSuccessfulMsg.style.display = "block";
            document.getElementById("overlay").style.display = "block";
            setTimeout(function() {
                SignupSuccessfulMsg.style.display = 'none'; 
                loginPopUpForm.style.display = "block";
            }, 2000);
        }
        else{
            const errdata = await res.json();
            window.alert(errdata.message);
        }
        signUpForm.reset();

    }catch (error) {
        console.error('Error:', error);
    }
}

function showSignUpForm(event){
    pwdSignUp.style.border = "2px solid #aaa";
    rpwd.style.border = "2px solid #aaa";
    email.style.border = "2px solid #aaa";
    errorMsgSignUp.style.display = "none";
    signUpPopUpForm.style.height = "480px";
    signUpForm.reset();
    errorMsgSignUp.style.display = "none";
    signUpPopUpForm.style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function showLoginForm(event){
    userLoginForm.reset();
    loginPopUpForm.style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeLoginForm(event){
    loginPopUpForm.style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeSignUpForm(event){
    signUpPopUpForm.style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closeSuccessfulMsg(event){
    SignupSuccessfulMsg.style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function checkEmail(event){
    const emailReg = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(email.value.match(emailReg))
    {
        email.style.border = "2px solid #aaa";
        errorMsgSignUp.style.display = "none";
    }
    else{
        errorMsgSignUp.style.display = "block";
        errorMsgSignUp.textContent = "Given email is not a valid email."
        email.style.border = "2px solid red";
        signUpPopUpForm.style.height = "500px";
        signUpSubmitBtn.setAttribute('disabled','disabled');
    }
}

function checkInputs(event){
    
    if(fname.value.trim() != '' && lname.value.trim() != '' && uNameSignUp.value.trim() != ''&& pwdSignUp.value.trim() != '' && rpwd.value.trim() != '' ){
        
        if(pwdSignUp.value == rpwd.value)
        {
            signUpSubmitBtn.removeAttribute('disabled');
            signUpSubmitBtn.style.background = "black";
            signUpSubmitBtn.style.cursor = "pointer";
            errorMsgSignUp.style.display = "none";
            signUpPopUpForm.style.height = "480px";
            pwdSignUp.style.border = "2px solid #aaa";
            rpwd.style.border = "2px solid #aaa";
        }
        else{
            errorMsgSignUp.style.display = "block";
            errorMsgSignUp.textContent = "Password and retyped password do not match."
            pwdSignUp.style.border = "2px solid red";
            rpwd.style.border = "2px solid red";
            signUpPopUpForm.style.height = "500px";
            signUpSubmitBtn.setAttribute('disabled','disabled');
        }    
        
    }
    else if(fname.value.trim() == '' && lname.value.trim() == '' && email.value.trim() == '' && uNameSignUp.value.trim() == '' && pwdSignUp.value.trim() == '' && rpwd.value.trim() == '' )
    {
        errorMsgSignUp.style.display = "block";
        signUpPopUpForm.style.height = "500px";
        signUpSubmitBtn.setAttribute('disabled','disabled');
    }
}

function checkloginInput(event){
    if(Uname.value.trim() != '' && Pwd.value.trim() != ''){
        loginSubmitBtn.removeAttribute('disabled');
        loginSubmitBtn.style.background = "black";
        loginSubmitBtn.style.cursor = "pointer";
        loginSubmitBtn.style.hover = "#2f8aa8";
    }
    else{
        loginSubmitBtn.setAttribute('disabled','disabled');
    }
}

loginBtn.addEventListener("click",showLoginForm);
closeBtnLogin.addEventListener("click",closeLoginForm);
closeBtnSignUp.addEventListener("click",closeSignUpForm);
contentSignUpbtn.addEventListener("click",showSignUpForm);
closeBtnMsg.addEventListener("click",showSignUpForm);

fname.addEventListener("input",checkInputs);
lname.addEventListener("input",checkInputs);
email.addEventListener("input",checkEmail);
uNameSignUp.addEventListener("input",checkInputs);
pwdSignUp.addEventListener("input",checkInputs);
rpwd.addEventListener("input",checkInputs);
Uname.addEventListener("input",checkloginInput);
Pwd.addEventListener("input",checkloginInput)


signUpBtn.addEventListener("click",showSignUpForm);
signUpBtn2.addEventListener("click",function(){
        closeLoginForm();
        showSignUpForm();
})
userLoginForm.addEventListener("submit",login);
signUpForm.addEventListener("submit",signUp);
