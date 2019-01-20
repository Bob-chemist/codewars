function towerBuilder(nFloors) {
  var base = nFloors*2 - 1;
  var floor = '';
  var arr = [];
  for (let i = 1; i <= nFloors; i++) {
    for (let k = 0; k < base; k++) {
      if (k >= (base - 2*i +1)/2 && k < (base + 2*i -1)/2  ) {
        floor += '*';
      } else {
        floor += ' ';
      }
    }
    arr.push(floor);
    floor = '';
  }
  return arr;
}