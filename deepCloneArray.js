const arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const convert = (arr) => JSON.parse(JSON.stringify(arr));

const newArr = convert(arr1);

console.log(newArr);

