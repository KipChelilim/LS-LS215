function myReduce(array, func, initial) {
  let result = initial
  let idx = 0;

  if (initial === undefined) {
    result = array[0]
    idx = 1
  }

  array.slice(idx).forEach((value) => {
    result = func(result, value);
  });

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49