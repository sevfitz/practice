function duplicateCount(text){
  let dict = {};
  text.toLowerCase().split('').forEach((item, i) => {
    !dict[item] ? dict[item] = 1 : dict[item]++;
  });
  let num = Object.values(dict).filter(item => item > 1).length;
  return num;
}



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