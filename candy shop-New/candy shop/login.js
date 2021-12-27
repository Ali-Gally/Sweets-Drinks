onload = function (event) {
    userNameInput = document.getElementById('userNameInput');
    passwordInput = document.getElementById('passwordInput');
    messageText = document.getElementById('msg');
    setPasswordButton = document.getElementById('passwordButton');

} 

function onPasswordChanged() {
    const password = passwordInput.value;
    let valid = false;
  
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


