function countSmileys(arr) {
  if (!arr.length) return 0;
  return arr.reduce(function(res, i){
    if (i.charAt(0) == ':' || i.charAt(0) == ';') {
      if (i.charAt(1) == ')' || i.charAt(1) == 'D') return ++res;
      else if (i.charAt(1) == '-' || i.charAt(1) == '~') {
        if (i.charAt(2) == ')' || i.charAt(2) == 'D') return ++res;
        return res;
      }
      return res;
    }
    return res;
  }, 0);
}