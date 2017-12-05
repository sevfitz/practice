function captcha(num) {
  let arr = num.split('');
  let sum = 0;
  if (arr[0] === arr[arr.length - 1]) sum += parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) sum += parseInt(arr[i]);
  }
  return sum;
}

// Note: enter the num as a string, since we can do that--we just need to get the sum for the captcha