// Ten-minute walk: each city block is represented by a direction and takes 1 minute to walk. Valid walks are 10 minutes long and return to where you started.

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let dict = {};
  walk.forEach(direction => {
    dict[direction] ? dict[direction]++ : dict[direction] = 1;
  });
  if (dict.n === dict.s && dict.e === dict.w) return true;
}