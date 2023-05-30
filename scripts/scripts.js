// assigns the button that will be clicked
var generatePasswordButton = document.getElementById("content_button");

function generatePassword() {

    // assigns the element where the newly generated password will output
    var generatedPassword = document.getElementById("generated_password");

    // assigns the user inputted value where the user inputs password length
    let userPromptPasswordLength = prompt("Enter a password length between 8 and 128 (inclusive):");

    // ends the function when the user has inputted nothing
    if(userPromptPasswordLength == "" || userPromptPasswordLength == null) {
        alert("The input is blank.");

       // writes parameter reminder text in output box
        generatedPassword.value = "There is nothing inside the input.";
        return;
    }

    // ends function when the user enters a length that it less than 8 or greater than 40
    if (userPromptPasswordLength > 128 || userPromptPasswordLength < 8) {

        // alert presented when password length is greater than 128
        if(userPromptPasswordLength > 128) {
            alert("Password length " +  userPromptPasswordLength + " is too long.");
        }

        // alert presented when password length is less than 8
        if(userPromptPasswordLength < 8) {
            alert("Password length " +  userPromptPasswordLength + " is too short.");
        }

       // writes parameter reminder text in output box
        generatedPassword.value = "Password length must be between 8 and 128.";
        return;
    }

    // confirm() method allows user to end function prematurely if desired length is not what they want
    if (confirm("Continue with a password of " + userPromptPasswordLength + " length?") == false) {
        alert("Press \"Generate Password\" again to restart with a new password length.");
        return;
    }

    // ends function when the user enters an input that contains anything other than a number
    // regex \d+ represents one or more numbers
    // regex $ represents ending the line
    if(!/^\d+$/.test(userPromptPasswordLength)) {

        // writes parameter reminder text in output box
        generatedPassword.value = "Only non-decimal numbers are allowed in the input.";
        return;
    }

    // three strings holding each category of possible password elements
    let possibleUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let possibleLowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let possibleNumbers = "0123456789";
    let possibleSpecial = "!#$%&'()\"*+,-./:;<=>?@[\]^_`{|}~";

    // assigns password parameter checkbox booleans
    let checkedUppercaseLetters = document.getElementById("check_uppercase_letters").checked;
    let checkedLowercaseLetters = document.getElementById("check_lowercase_letters").checked;
    let checkedNumbers = document.getElementById("check_numbers").checked;
    let checkedSpecial = document.getElementById("check_special").checked;

    // string that will hold any three possible password categories
    let allLetNumSpec = "";

    // ends function when no password parameters are checked
    if(checkedUppercaseLetters == false && checkedLowercaseLetters == false && checkedNumbers == false && checkedSpecial == false) {
        generatedPassword.value = "No password parameter selected.";
        return;
    }

    // checkbox to allow uppercase letters in output
    if (checkedUppercaseLetters) {
        allLetNumSpec += possibleUppercaseLetters;
    }

    // checkbox to allow lowercase letters in output
    if (checkedLowercaseLetters) {
        allLetNumSpec += possibleLowercaseLetters;
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

    // iterates based on user's desired password length
    for (let x = 0; x < userPromptPasswordLength; x++) {

        // adds random letter or number from all possible letters array into password
        let randIndex = Math.floor(Math.random() * possibleLettersDigits.length);
        password += possibleLettersDigits[randIndex];
    }

    // outputs newly generated password into output box
    generatedPassword.value = password;

    // final alert presenting that the function has fully executed
    alert("The password has been generated!\n" + password);
}

// listens to when user clicks the generate password button
generatePasswordButton.addEventListener("click", generatePassword);