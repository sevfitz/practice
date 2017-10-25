// Sort the odd values in ascending order, but leave the even 
// values in their same index positions

function sortArray(array) {
  let even = {};
  let sortedOdd = array.map((item, i) => {
    if (item % 2 === 0) even[i] = item;
    return item;
  })
  .filter(item => item % 2 !== 0).sort((a,b) => a > b);
  Object.keys(even).forEach( i => sortedOdd.splice(i, 0, even[i]));
  return sortedOdd;
}