// input an array of integers and a target integer. return an array of two indices for the two numbers that sum to the target. there will always be two numbers that sum to the target.

function twoSum(numbers, target) {
  let indexArray;
  numbers.forEach((num, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      if (num + numbers[j] === target) indexArray = [i, j];
    }
  });
  return indexArray;
}

// better solution:
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
      for (var j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}