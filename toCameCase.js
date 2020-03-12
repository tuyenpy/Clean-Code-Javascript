/*
Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

Test Cases:

describe("toCamelCase", function() {
  it ("should handle empty values", function(){
    Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
  })
  
  it ("should remove underscores and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    Test.assertEquals(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
  });
  
  it ("should remove hyphens and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    Test.assertEquals(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
    Test.assertEquals(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
  });
});

*/

//My practise
function toCamelCase(str){
    if (str.length === 0) return "";
    let arr = str.split(/[- _]/g);
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    }
    return arr.join("");
}

//Clever1:
// function toCamelCase(str){
//     var regExp=/[-_]\w/ig; // <=> /[-_](.)/g
//     return str.replace(regExp,function(match){  
//           return match.charAt(1).toUpperCase();
//     });
// }

//Clever2:
// function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (a, c) => c.toUpperCase());
// }
