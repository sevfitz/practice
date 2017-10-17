// Reverse words of a sentance in place. Do it without using reverse()!

function reverseWords(str) {
  let newArr = [];
  let finalArr = [];
  function rev (stringArr, arr) {
    for (let i = stringArr.length - 1; i >= 0; i--) {
      arr.push(stringArr[i]);
    }
    return arr;
  }
  let reversed = rev(str, newArr).join('').split(' ');
  return rev(reversed, finalArr).join(' ');
}