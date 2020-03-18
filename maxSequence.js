/*
Description:

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Test Cases:

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    Test.assertEquals(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
  it("should work on the example with negative numbers", function() {
    Test.assertEquals(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0);
  });
  it("should work on random arrays", function(){
    var solution = function(arr){
      var i, j, k = 0, r;
      for(i = 0; i < arr.length; ++i){    
        for(r = 0, j = i; j < arr.length; ++j){
          r += arr[j];
          k = k > r ? k : r;
        }
      }
      return k;
    }, randomArray = function(n){
      var res = [];
      while( n --> 0 ) res.push(Math.round(Math.random() * 100 - 50));
      return res;
    }, r, i;
    for(i = 0; i < 50; ++i){
      r = randomArray(Math.random() * 70);
      Test.assertEquals(maxSequence([...r]), solution(r));
    }
  });
});
*/
function maxSequence(arr){
    // ...
    let maxSofar = 0, maxEndingHere = 0;
    let n = 0; subArr = []; total = 0;

    for(let i = 0; i < arr.length; i++){
        maxEndingHere = maxEndingHere + arr[i];
        if (maxSofar < maxEndingHere) {
            maxSofar = maxEndingHere;
            n = i; //phan tu cuoi cung co maxSofar
        }

        if (maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }
    // Truy nguoc lai chuoi tu phan tu cuoi cung
    for (let i = n; i > 0; i--){
        if (total == maxSofar) break;
        total += arr[i];
        subArr.push(arr[i]);
    }
    
    return [maxSofar, subArr.reverse()];
}

// var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//       console.log({sum, min, ans});
//     }
//     return ans;
// };

let maxSequenceArr = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(maxSequenceArr);