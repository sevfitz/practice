// Simple currying exercise: sum the numbers, the last call does not have an argument

function sum(num) {
  let sum = 0;
  return function add(n) {
    if (typeof n === 'undefined') return sum;
    sum +=n;
    return add;
  }(num);
}