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

    let allLetNumSpec = possibleLetters + possibleNumbers + possibleSpecial;
    let possibleLettersDigits = allLetNumSpec.split("");

    var password = "";

    for (let x = 0; x < userPromptPasswordLength; x++) {
        let randIndex = Math.floor(Math.random() * possibleLettersDigits.length);
        password += possibleLettersDigits[randIndex];
    }

    generatedPassword.value = password;
}

generatePasswordButton.addEventListener("click", generatePassword);