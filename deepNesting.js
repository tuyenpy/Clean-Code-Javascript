"use strict";

// |Input --- fn check array --> (true) --> fn check(call back) -- (true) --> ...........
//                                (false) --> {console.log(item); return}                 

const arr = [[[["value1"], "value2",[[["value3", [[[["value4", ["value5"]]]]]]]]]]];

const arr1 = 123;

const obj = {a: 1};

let newArr = [];

const printArr = (arr) => {
  if (Array.isArray(arr)) {
    loopArr(arr)
  } else {
    newArr.push(arr)//console.log(arr)
  }
}

const loopArr = (arr) => {
  arr.map((item) => {
    if (Array.isArray(item)) {
      loopArr(item)
    } else {
      newArr.push(item)//console.log(item)
    }
  })
}

printArr(arr);

console.log(newArr);

// Output expect:
// value1
// value2
// value3
// value4
// value5