const arr = ["a", "a", "b", "a", "c", "d", "b", "c", "d", "b"];

function countOccurrences(arr) {
    // viết code ở đây.
    return arr.reduce((obj, currentItem) => {
        if (obj[currentItem] > 0) {
            obj[currentItem] = obj[currentItem] + 1
        } else {
            obj[currentItem] = 1
        }

        return obj;

    }, {});
  }

console.log(countOccurrences(arr));