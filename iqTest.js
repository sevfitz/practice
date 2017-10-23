// Had to make it work without using Object.values

function iqTest(numbers){
  let array = numbers.split(' ');
  let even = {};
  let odd = {};
  array.forEach((item, i) => {
    item/2 === parseInt(item/2) ? even[item + i] = i : odd[item + i] = i;
  });
  return Object.keys(even).length > 1 ? 1 + odd[Object.keys(odd)] : 1 + even[Object.keys(even)];
}