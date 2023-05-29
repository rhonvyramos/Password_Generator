var generatePasswordButton = document.getElementById("content_button");

function generatePassword() {
    let userPromptPasswordLength = document.getElementById("user_prompt_password_length").value;
    var generatedPassword = document.getElementById("generated_password");

    if (userPromptPasswordLength > 40 || userPromptPasswordLength < 8) {
        generatedPassword.value = "Unsatisfied password length parameters.";
        return;
    }

    let possibleLetters = "abcdefghijklmnopqrstuvwxyz";
    let possibleNumbers = "0123456789";
    let possibleSpecial = "@#$%^&*()[]{}";

    let checkedLetters = document.getElementById("check_letters").checked;
    let checkedNumbers = document.getElementById("check_numbers").checked;
    let checkedSpecial = document.getElementById("check_special").checked;

    let allLetNumSpec = "";

    if(checkedLetters == false && checkedNumbers == false && checkedSpecial == false) {
        generatedPassword.value = "No password parameter selected.";
        return;
    }

    if (checkedLetters) {
        allLetNumSpec += possibleLetters;
    }

    if (checkedNumbers) {
        allLetNumSpec += possibleNumbers;
    }

    if (checkedSpecial) {
        allLetNumSpec += possibleSpecial;
    }

    let possibleLettersDigits = allLetNumSpec.split("");

    var password = "";

    for (let x = 0; x < userPromptPasswordLength; x++) {
        let randIndex = Math.floor(Math.random() * possibleLettersDigits.length);
        password += possibleLettersDigits[randIndex];
    }

    generatedPassword.value = password;
}

generatePasswordButton.addEventListener("click", generatePassword);