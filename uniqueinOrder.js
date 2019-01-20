var uniqueInOrder=function(iterable){
  if (typeof iterable == 'string') iterable = iterable.split('');
  if (iterable.length == 0) return [];
  var res = [];
  res.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i -1] != iterable[i]) {
      res.push(iterable[i]);
    }
  }
  return res;
}