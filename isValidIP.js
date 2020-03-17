/*
Description:

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.
Examples

Valid inputs:

1.2.3.4
123.45.67.89

Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Test Cases:

Test.assertEquals(isValidIP(''), false);
Test.assertEquals(isValidIP('abc.def.ghi.jkl'), false);
Test.assertEquals(isValidIP('123.456.789.0'), false);
Test.assertEquals(isValidIP('12.34.56'), false);
Test.assertEquals(isValidIP('01.02.03.04'), false);
Test.assertEquals(isValidIP('256.1.2.3'), false);
Test.assertEquals(isValidIP('1.2.3.4.5'), false);
Test.assertEquals(isValidIP('123,45,67,89'), false);
Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
Test.assertEquals(isValidIP(' 1.2.3.4'), false);
Test.assertEquals(isValidIP('1.2.3.4 '), false);
Test.assertEquals(isValidIP('12.34.56.-7'), false);
Test.assertEquals(isValidIP('1.2.3.4\n'), false);
Test.assertEquals(isValidIP('\n1.2.3.4'), false);

Test.assertEquals(isValidIP('0.0.0.0'), true);
Test.assertEquals(isValidIP('123.45.67.89'), true);
Test.assertEquals(isValidIP('255.255.255.255'), true);
Test.assertEquals(isValidIP('1.2.3.4'), true);
Test.assertEquals(isValidIP('31.41.59.26'), true);
Test.assertEquals(isValidIP('53.58.97.93'), true);
Test.assertEquals(isValidIP('238.46.26.43'), true);
Test.assertEquals(isValidIP('38.32.79.50'), true);
Test.assertEquals(isValidIP('28.84.197.169'), true);
Test.assertEquals(isValidIP('39.93.75.105'), true);
Test.assertEquals(isValidIP('82.0.97.49'), true);
Test.assertEquals(isValidIP('44.59.230.78'), true);
Test.assertEquals(isValidIP('164.0.62.86'), true);
Test.assertEquals(isValidIP('208.99.86.28'), true);
Test.assertEquals(isValidIP('0.34.82.53'), true);
Test.assertEquals(isValidIP('42.117.0.67'), true);
Test.assertEquals(isValidIP('98.214.80.86'), true);
Test.assertEquals(isValidIP('51.32.82.30'), true);
Test.assertEquals(isValidIP('66.47.0.93'), true);
Test.assertEquals(isValidIP('84.46.0.95'), true);
Test.assertEquals(isValidIP('50.58.22.31'), true);
Test.assertEquals(isValidIP('72.53.59.40'), true);
Test.assertEquals(isValidIP('81.28.48.1'), true);


Test.describe("Random tests", () => {
  let letters = "abcdefghijklm";
  let rnd = function(n) { return (Math.random() * n) | 0; };

  for (let test = 0; test < 300; ++test) {
  
      let parts = [];
      for (let i = 0; i < 4; ++i)
          parts.push('' + rnd(256));
  
      let pos = rnd(4);
      let i = rnd(4);
      let someLetters = letters.substring(i, i + rnd(2) + 1);
      let valid = false;
      let route = rnd(12);
      switch (route)
      {
          case 0: valid = true; break;
          case 1: parts[pos] = ''; break;
          case 2: parts[pos] = someLetters; break;
          case 3: parts[pos] = rnd(44) + 256; break;
          case 4: parts.splice(pos, 1); break;
          case 5: parts.push('' + rnd(256)); break;
          case 6: parts[0] = someLetters + parts[0]; break;
          case 7: parts[3] += someLetters; break;
          case 8: parts[rnd(2) + 1] += " "; break;
          case 9: parts[pos] = "-" + parts[pos]; break;
          case 10: parts[pos] = "0" + rnd(100); break;
          case 11: parts[pos] = "00"; break;
      }
  
      let ip = parts.join('.');
      Test.assertEquals(!!isValidIP(ip), valid, "Teste IP: " + ip);
  }
});
*/
//My Practise
function isValidIP(str) {
    let check1 = /^(\d+.){3}\d+$/g;   
    if (!(check1.test(str))) return false;    
    let arr = str.split(".");
    if (arr.length < 4) return false;
    for (let i = 0; i < arr.length; i++){
      if (/^0\d+/g.test(arr[i]) || arr[i] > 255) return false;
    }
    return true;    
}

//Clever1
// function isValidIP(str) {
//     return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

//Clever2
// function isValidIP(str) {
//     return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
// }

//Clever3
// const net = require('net');
// const isValidIP = (s) => net.isIP(s);