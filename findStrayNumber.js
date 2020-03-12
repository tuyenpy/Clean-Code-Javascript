/*
Description:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Test Cases:

Test.assertEquals(stray([1, 1, 2]), 2);

Test.assertEquals(stray([17, 17, 3, 17, 17, 17, 17]), 3);

Test.assertEquals(stray([8, 1, 1, 1, 1, 1, 1]), 8);

Test.assertEquals(stray([1, 1, 1, 1, 1, 1, 0]), 0);

Test.assertEquals(stray([0, 0, 0, 7, 0, 0, 0]), 7);

Test.assertEquals(stray([-21, -21, -21, -21, -6, -21, -21]), -6);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function validRandomArray(size, strayNumber) {
    let array = Array(size).fill(randomInt(-10000, 10000));
    array[randomInt(0, size)] = strayNumber;
    return array;
}

let strayNumber;
for(let i=0 ; i<50 ; i++){
    strayNumber = randomInt(-10000, 10000);
    let arr = validRandomArray(101, strayNumber);
    Test.assertEquals(stray(arr), strayNumber);
    
    strayNumber = randomInt(-10000, 10000);
    arr = validRandomArray(15273, strayNumber)
    Test.assertEquals(stray(arr), strayNumber);
}

*/
// my practise
function stray(numbers) {
    let obj = {}; 
    for (let i = 0; i < numbers.length; i++){
      if (obj[numbers[i]] === undefined) {
        obj[numbers[i]] = 1;
      } else {
        obj[numbers[i]] += 1;
      }
    }
    // console.log(obj); //obj = {"1": 2, "2": 1,...} // thong ke so lan xuat hien cac phan tu
    // Sap xep obj tren theo thu tu tang dan property, key dau tien la gia tri can tim
    return parseInt(Object.keys(obj).sort((a, b) => obj[a] - obj[b])[0]); // return number
}
stray([1, 2, 1, 2, 3]);
// Expect:
//output: 3

//Clever1 // Only use odd length

// const stray = nums => nums.reduce((a, b) => a ^ b);

// Clever2 //
// function stray(numbers){
//     for (var i in numbers){
//        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//     }
// }

// let str = stray([1, 2, 1, 2, 3]);
// console.log(str);