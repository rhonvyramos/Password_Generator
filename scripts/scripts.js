var generatePasswordButton = document.getElementById("content_button");

function generatePassword() {
    let possibleLetters = "abcdefghijklmnopqrstuvwxyz";
    let possibleNumbers = "0123456789";
    let possibleSpecial = "@#$%^&*()[]{}";

    let allLetNumSpec = possibleLetters + possibleNumbers + possibleSpecial;
    let possibleLettersDigits = allLetNumSpec.split("");

    var password = "";

    for (let x = 0; x < 16; x++) {
        let randIndex = Math.floor(Math.random() * possibleLettersDigits.length);
        password += possibleLettersDigits[randIndex];
    }

    var generatedPassword = document.getElementById("generated_password");

    generatedPassword.value = password;
}

generatePasswordButton.addEventListener("click", generatePassword);