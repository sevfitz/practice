// Count the number of types of different case-insensitive chars/digits that recur

function duplicateCount(text){
  let arr = [];
  let input = text.toLowerCase().split('');
  console.log(input);
  input.forEach((item, i) => {
    for (let j = i + 1; j < input.length; j ++) {
      if (item === input[j] && arr.indexOf(item) === -1) arr.push(item);
    }
  });
  return arr.length;
}