/*There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
So, for example:

queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

function queueTime(line, registers) {
    var queueArr = [];
    for(var i = 0; i < registers; i++) {
      queueArr.push(0);
    }
   console.log(queueArr); // [0,0,0....n] n = registers
    for(var j = 0; j < line.length; j++) {
      queueArr[0] += line[j];
      console.log(queueArr);
      queueArr.sort(function(a,b){ // [a, b, c, d,....] increment a->d..->max
        return a-b;
      });
    }
    console.log(queueArr);    
    return queueArr[queueArr.length-1]; // max element is max time
  }
  
  
  // queueTime([], 1); // 0
  // queueTime([1,2,3,4], 1); // 10
  // queueTime([2,2,3,3,4,4], 2); // 9
  // queueTime([1,2,3,4,5], 100); // 5
 queueTime([7,2,3,3], 2); // 10
  
  
  /*function queueTime(time, queue) {
    var arr = [];
    while(queue > 0) {
      arr.push(0);
      queue--;
    }
    // console.log(arr);
    while(time.length !== 0)
      for(var i = 0; i < arr.length; i++) {
        for(var j = 1; j < arr.length; j++) {
          if(arr[i] <= arr[j]) {
            arr[i] += time[0];
            time.shift();
          }
        }
      }
    }
    console.log(arr);
  }
  
  
  // queueTime([], 1); // 0
  // queueTime([1,2,3,4], 1); // 10
  // queueTime([2,2,3,3,4,4], 2); // 9
  // queueTime([1,2,3,4,5], 100); // 5
  queueTime([10,2,3,3], 2); // 10*/
  
  
  
  
  
  /*function queueTime(time, queue) {
    debugger;
    if(time.length === 0) {
      return 0;
    }
    var object = {};
    while(queue > 0) {
      object[queue] = 0;
      queue--;
    }
    while(time.length > 0) {
      for(var outer in object) {
        for(var inner in object) {
          if(object[outer] < object[inner]) {
            object[outer] += time[0];
          } else {
            object[inner] += time[0];
          }
          time.shift();
        }
      }
    }
    console.log(object);
  }
  
  
  // queueTime([], 1); // 0
  // queueTime([1,2,3,4], 1); // 10
  // queueTime([2,2,3,3,4,4], 2); // 9
  queueTime([1,2,3,4,5], 100); // 5
  // queueTime([10,2,3,3], 2); // 10*/
  
  
  
  /*function queueTime(time, queue) {
    debugger;
    if(time.length === 0) {
      return 0;
    }
    var obj = {};
    while(queue > 0) {
      obj[queue] = 0;
      queue--;
    }
    // console.log(obj);
    
    while(time.length !== 0) {
      for(var key in obj) {
        console.log(time);
        console.log(obj[key]);
        for(var keyo in obj) {
          console.log(key, keyo);
          if(obj[key] < obj[keyo]) {
            obj[key] += time[0];
            time.shift();
          }
          // time.shift();
        }
      }
    }
    // console.log(obj);
  }
  
  
  // queueTime([], 1); // 0
  // queueTime([1,2,3,4], 1); // 10
  // queueTime([2,2,3,3,4,4], 2); // 9
  // queueTime([1,2,3,4,5], 100); // 5
  queueTime([10,2,3,3], 2); // 10*/