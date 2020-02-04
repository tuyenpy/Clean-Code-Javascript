"use strict";

// |Input --- fn check array --> (true) --> fn check(call back) -- (true) --> ...........
//                                (false) --> {console.log(item); return}                 

const arr = [[[["value1"], "value2",[[["value3", [[[["value4", ["value5"]]]]]]]]]]];
// const arr1 = 123;

const checkArr = (arr) => {// fn check array
  if (Array.isArray(arr)) {
    arr.map( (item)=>{
      if (Array.isArray(item)) {// true -> fn check - callback
        checkArr(item)
      } else { // false -> console.log(item); return;
        console.log(item);
        return;
      }
    } )
  }
  console.log(arr);
}

checkArr(arr);

// Output expect:
// value1
// value2
// value3
// value4
// value5