// Find the missing number in an array. The difference between numbers will always be the same. The missing number will never be the first or last in the array.

var findMissing = function (list) {  
  let firstDiff = Math.abs(list[1] - list[0]);
  for (let i = 1; i < list.length - 1; i++) {
    let j = i + 1;
    let tempDiff = Math.abs(list[j] - list[i]);
    if ( tempDiff > firstDiff ) {
      return list[j] - list[i] > 0 ? list[i] + firstDiff : list[i] - firstDiff;
    }
    else if ( tempDiff < firstDiff ) {
      return list[j] - list[i] > 0 ? list[0] + tempDiff : list[0] - tempDiff;
    }
  }
};