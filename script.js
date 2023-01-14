// declaring global variables
let login = document.getElementById("loginBtn");
let signup = document.getElementById("signupBtn");
let actionbtn = document.getElementById("actionBtn");
let actionbtn1 = document.getElementById("actionBtn1");
let createacc = document.getElementById("account");
let forget = document.getElementById("forget");
let forgetform = document.getElementById("forgetform");
let loginform = document.getElementById("textAreaLogin");
let signupform = document.getElementById("textAreaSignup");

//  button functionalities
signup.addEventListener("click", () => {
  forgetform.style.display = "none";
  loginform.style.display = "none";
  signupform.style.display = "block";
  signup.style.fontWeight = "bolder";
  login.style.fontWeight = "normal";
  login.style.borderBottom = "none";
  signup.style.borderBottom = "3px solid #E70B89";
  actionbtn.style.display = "none";
  actionbtn1.style.display = "block";
});

login.addEventListener("click", () => {
  forgetform.style.display = "none";
  loginform.style.display = "block";
  signupform.style.display = "none";
  login.style.fontWeight = "bolder";
  signup.style.fontWeight = "normal";
  signup.style.borderBottom = "none";
  login.style.borderBottom = "3px solid #E70B89";
  actionbtn.style.display = "block";
  actionbtn1.style.display = "none";
});
createacc.addEventListener("click", () => {
  forgetform.style.display = "none";
  loginform.style.display = "none";
  signupform.style.display = "block";
  signup.style.fontWeight = "bolder";
  login.style.fontWeight = "normal";
  login.style.borderBottom = "none";
  signup.style.borderBottom = "3px solid #E70B89";
  actionbtn.innerText = "SIGNUP";
});
forget.addEventListener("click", () => {
  loginform.style.display = "none";
  signupform.style.display = "none";
  signup.style.borderBottom = "none";
  login.style.borderBottom = "none";
  signup.style.borderBottom = "3px solid #515151a1";
  login.style.borderBottom = "3px solid #515151a1";
  forgetform.style.display = "block";
  actionbtn.innerText = "SEND RECOVERY EMAIL";
});

//login form validation
actionbtn.addEventListener("click", () => {
  let logemail = document.getElementById("logemail");
  let logpass = document.getElementById("logpass");
  let arremail = localStorage.getItem("Email");
  let arrpass = localStorage.getItem("Password");
  if (arremail == null) {
    storeemail = [];
    storepass = [];
  } else {
    storeemail = JSON.parse(arremail);
    storepass = JSON.parse(arrpass);
    console.log("Working");
  }
  let str = logemail.value.toString();
  if (storeemail.includes(str)) {
    let ind = storeemail.indexOf(str, 0);
    if (logpass.value == storepass[ind]) {
      alert("Logged in");
    } else {
      alert("Wrong Credentials");
      logpass.style.border = "2px solid red";
    }
    logemail.value = "";
    logpass.value = "";
  } else {
    alert("Email not Registered");
  }
});
//SignUp form
actionbtn1.addEventListener("click", () => {
  let username = document.getElementById("username");
  let semail = document.getElementById("semail");
  let spass = document.getElementById("spass");
  let cnfpass = document.getElementById("cnfpass");
  let arrname = localStorage.getItem("Name");
  let arremail = localStorage.getItem("Email");
  let arrpass = localStorage.getItem("Password");
  if (arremail == null) {
    storename = [];
    storeemail = [];
    storepass = [];
  } else {
    storename = JSON.parse(arrname);
    storeemail = JSON.parse(arremail);
    storepass = JSON.parse(arrpass);
  }
  if (storeemail.includes(semail.value)) {
    alert("Email Already registered");
    username.value = "";
    semail.value = "";
    spass.value = "";
    cnfpass.value = "";
    location.reload();
  } else {
    storename.push(username.value);
    storeemail.push(semail.value);
    storepass.push(spass.value);
    alert("Registered Succesfully");
  }
  localStorage.setItem("Name", JSON.stringify(storename));
  localStorage.setItem("Email", JSON.stringify(storeemail));
  localStorage.setItem("Password", JSON.stringify(storepass));
  username.value = "";
  semail.value = "";
  spass.value = "";
  cnfpass.value = "";
});
