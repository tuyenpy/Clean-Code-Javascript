"use strict";
// clone Object by use JSON.parse() & JSON.stringify()


const obj = {
    a: 1,
    b: {c: 1},
    d: {e: 1, f: {g: 1, h: {j: 1, k: {p: 1}}}}
}

let text = JSON.stringify(obj); // object convert to string

let cloneObject = JSON.parse(text); // string convert to object

// console.log(obj);
console.log(cloneObject);

console.log(cloneObject === obj);

// Expect: false