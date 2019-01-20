function abbreviate(string) {
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }
  var word = '';
  var res = [];
  for ( var i = 0; i < string.length; i++)
    if (isLetter(string[i])) {
      word += string[i];
      if (i == string.length - 1) res.push(word);
    } else {
      if (word != '') {
        res.push(word);
      }
      res.push(string[i]);
      word = '';
    }
  return res.map(function(word) {
    if (word.length > 3) {
      return word[0] + (word.length - 2) + word[word.length-1];
    }
    return word;
  }).join('');
  }