function expandedForm(num) {
  var str = num + '';
  var res = '';
  for (var i = 0; i < str.length; i++) {
    var pos = (num % 10) * 10 ** i;
    num = Math.floor(num / 10)
    if (i == str.length-1) res = pos + res;
    else if (pos == 0) continue;
    else res = ' + ' + pos + res;
  }
  return res;
}