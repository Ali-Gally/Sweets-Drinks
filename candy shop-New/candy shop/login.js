let userN;
let psw;
let messageText;
let setPasswordButton;
let adrs;
let eml;

onload = function (event) {
    userN = document.getElementById('userNameInput');
    passwordInput = document.getElementById('passwordInput');
    messageText = document.getElementById('msg');
    setPasswordButton = document.getElementById('passwordButton');
    adresse = document.getElementById('addressInput');
    eml = document.getElementById('emailInput');
}

function onPasswordChanged() {
    const password = passwordInput.value;
    let valid = false;
    let message = '';
  
    if (password === '') {
        message = '';
    } else if (password.length < 5) {
        message = 'Das Kennwort muss mindestens 5 Zeichen lang sein';
        //Regex - regular expression 
    } else if (password.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\W\S_]{5,}$/)) {
        message = 'Das Kennwort muss mindestens jeweils einen Klein- und Großbuchstaben,sowie eine Zahl enthalten.';
    } else {
        message = 'Kennwort ist gültig';
        valid = true;
    }

    if (valid) {
        messageText.style.color = 'green';
        setPasswordButton.disabled = false;
    } else {
        messageText.style.color = 'red';
        setPasswordButton.disabled = true;
    }
    messageText.innerText = message;
}


function formValidation()
{
var psw = document.registration.psw;
var userN = document.registration.userN;
var adrs = document.registration.adrs;
var eml = document.registration.eml;
{
if(psw_validation(psw,7,12))
{
if(allLetter(userN))
{
if(alphanumeric(adrs))
{ 
if(ValidateEmail(eml))
{
} 
} 
}
}
}
valid = false;
}

function allLetter(userN)
{ 
var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\W\S_]{5,}$/;
if(userN.value.match(letters))
{
valid = true;
}
else
{
alert('Username must have alphabet characters only');
userN.focus();
valid = false;
}
}

function alphanumeric(adrs)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(adrs.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
adrs.focus();
return false;
}
}
