function stockList(listOfArt, listOfCat){
  if (!listOfArt.length || !listOfCat.length) return '';
  var res = listOfCat.map(item => [item,0]);
  listOfArt.map(item => item.split(' ')).forEach(arr => {
    listOfCat.forEach( (cat, k) => {if (!arr[0].indexOf(cat)) res[k][1] += +arr[1]});
  });
  return '(' + res.map(item => item.join(' : ')).join(') - (') + ')';
}