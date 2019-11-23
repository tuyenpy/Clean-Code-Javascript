// Example read a text file

const fs = require('fs');

//Read file using readFileSync

// function read() {
//     let text = fs.readFileSync('README.md', 'utf8')
//     console.log(text);
// }

//use setTimeOut

// function print1() {
//     setTimeout(read, 0);
//     console.log("Start");
//     console.log("End");
// }
// print1();
// ****Excepting:
// ****Start
// ****End
// ****Learn JS step by step

//user Promise
// function read() {
//     return new Promise (function (resolve, reject) {
//         let text = fs.readFileSync('README.md', 'utf8')

//         resolve(text);
//     })
// }

// read()
// .then(function(data) {
//     console.log(data)
// })

// console.log("Start");
// console.log("End");
// Excepting:
// Start
// End
// Learn JS step by step!

// using async/await

async function read() {
    let text = await fs.readFileSync('README.md', 'utf8');
    console.log(text);
}

function print2() {
    read();
    console.log("Start");
    console.log("End")
}
print2();
// Excepting:
// Start
// End
// Learn JS step by step!