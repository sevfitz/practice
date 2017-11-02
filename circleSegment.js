function tankvol(h, d, vt) {
  // radius of tank r
  let r = d/2;
  // length of tank l
  let l = vt / (Math.PI * r * r);
  // height of triangle a
  let a = Math.abs(r - h);
  // angle of segment theta
  let theta = Math.acos(a/r);
  // base of half-triangle c
  let c = r * Math.sin(theta);
  // area of circle section s
  let s = theta * r * r;
  // area of triangle t
  let t = a * c;
  // volume of segment vs
  let vs = (s - t) * l;
  return r > h ? Math.floor(vs) : Math.floor((vt - vs));
}