const _ = require('lodash');

let obj = {a: 1, b: {c: 1, d: {e: 1}}}; // than 3 not work

let copyObj = _.cloneDeep(obj);

console.log(copyObj);

console.log(copyObj === obj);