var generatePasswordButton = document.getElementById("content_button");

function generatePassword() {

    // assigns the element where the user inputs password length
    let userPromptPasswordLength = document.getElementById("user_prompt_password_length").value;

    // assigns the element where the newly generated password will output
    var generatedPassword = document.getElementById("generated_password");

    // ends function when the user enters a length that it less than 8 or greater than 40
    if (userPromptPasswordLength > 40 || userPromptPasswordLength < 8) {
        generatedPassword.value = "Unsatisfied password length parameters.";
        return;
    }

    // three strings holding each category of possible password elements
    let possibleLetters = "abcdefghijklmnopqrstuvwxyz";
    let possibleNumbers = "0123456789";
    let possibleSpecial = "@#$%^&*()[]{}";

    // assigns password parameter checkbox booleans
    let checkedLetters = document.getElementById("check_letters").checked;
    let checkedNumbers = document.getElementById("check_numbers").checked;
    let checkedSpecial = document.getElementById("check_special").checked;

    // string that will hold any three possible password categories
    let allLetNumSpec = "";

    // ends function when no password parameters are checked
    if(checkedLetters == false && checkedNumbers == false && checkedSpecial == false) {
        generatedPassword.value = "No password parameter selected.";
        return;
    }

    // checkbox to allow letters in output
    if (checkedLetters) {
        allLetNumSpec += possibleLetters;
    }

    // checkbox to allow numbers in output
    if (checkedNumbers) {
        allLetNumSpec += possibleNumbers;
    }

    // checkbox to allow special characters in output
    if (checkedSpecial) {
        allLetNumSpec += possibleSpecial;
    }

    // splits letter categories into an array
    let possibleLettersDigits = allLetNumSpec.split("");

    var password = "";

    // adds random letter or number from all possible letters array into password
    // iterates based on user's desired password length
    for (let x = 0; x < userPromptPasswordLength; x++) {
        let randIndex = Math.floor(Math.random() * possibleLettersDigits.length);
        password += possibleLettersDigits[randIndex];
    }

    // outputs newly generated password into output box
    generatedPassword.value = password;
}

// listens to when user clicks the generate password button
generatePasswordButton.addEventListener("click", generatePassword);