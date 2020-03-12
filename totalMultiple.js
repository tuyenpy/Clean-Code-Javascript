/*
Description:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once.
Test Cases:

function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
  test(20,78)
  test(200,9168)
})

Test.describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

function _solution(number){
  var sum = 0;
  
  for(var i = 1; i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

Test.describe("random cases", function() {
  for(var i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * 200)
    test(rand, _solution(rand));
  }
})
*/
// My pratise
function solution(number){
    let n = 0;
    let k = 0;
    while( n < number){
        if (n % 3 === 0 || n % 5 ===0){
            k += n;
        }
        n = n + 1;
    }
    return k;
}
let kq = solution(10);

console.log(kq); // 23

//Clever
// so chu so chia het cho 3: n3 = Math.floor(number/3)
// tong bang 3 * n3 * (n3 + 1)/2 ---> tong 1 day so tu 1 --> n: n*(n+1)/2
// function solution(number){
//     var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
//     return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
// }