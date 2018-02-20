/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loves = 0, loveTriangle = 0, len = preferences.length;
  for(let i=0; i<len; i++) {
    let loveA = preferences[i]-1;
    let loveB = preferences[loveA]-1;
    let loveC = preferences[loveB]-1;
    if(loveC == i){loves++};
  }
  loveTriangle = Math.floor(loves/3);
  return loveTriangle;
};
