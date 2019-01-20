function simplify(poly){
  var operators = poly.split(/[a-z]+/);
  if (!operators[0]) operators[0] = 1;
  operators.pop();
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] == '+') operators[i] = 1;
  else if (operators[i] == '-') operators[i] = -1;
    else operators[i] = +operators[i]
  }
  var monos = poly.split(/[-+0-9]+/).map(i => i.split('').sort().join(''));
  if (!monos[0]) monos.shift();
  var polynom = {};
  for (let i = 0; i < monos.length; i++) {
    !polynom[monos[i]] ? polynom[monos[i]] = operators[i] : polynom[monos[i]] += operators[i];
  }
  var res = [];
  for (let key in polynom) {
    if (polynom[key] == 0) ;
    else if (polynom[key] == -1) res.push('-' + key);
    else if (polynom[key] == 1) res.push('+' + key);
    else if (polynom[key] > 1) res.push('+' + polynom[key] + key);
  else res.push(polynom[key] + key);
  }
  res.sort(function (a,b) {
    if (a.match(/[a-z]+/)[0].length == b.match(/[a-z]+/)[0].length && a.match(/[a-z]+/)[0] > b.match(/[a-z]+/)[0]) return true;
    if (a.match(/[a-z]+/)[0].length > b.match(/[a-z]+/)[0].length) return true;
  });
  if (res[0][0] == '+') res[0] = res[0].slice(1);
  return res.join('');
}