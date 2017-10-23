var isPP = function(n){
  let end = parseInt(Math.pow(n, 1/2)) + 2;
  let result = null;
  for (let k = 2; k < end; k++) {
    let m = Math.pow(n, 1/k);
    let round = Math.round(m);
    let diff = Math.abs(m - round);
    if ( m === round || (diff > 0 && diff < 0.00000000001)) result = [round,k];
    }
  return result; 
};