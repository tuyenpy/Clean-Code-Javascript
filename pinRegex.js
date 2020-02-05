const readline = require('readline-sync');

const phoneNumber = readline.question("What is your phone number:  ");

const checked = /^\d{3}-\d{3}-\d{4}\b/g.test(phoneNumber); //123-568-7865

if (checked) {
    console.log(`Your phone number is ${phoneNumber}`)
} else {
    console.log("Phone number invalid")
}