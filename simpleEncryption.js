function encrypt(text, n) {
  if (n <= 0 || !text) return text;
  for (let i = 0; i < n; i++) {
    var part1 = ''; var part2 = '';
    for (let k = 0; k < text.length; k++){
      k%2 ? part1 += text[k] : part2 += text[k];
    }
    text = part1 + part2;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) return encryptedText;
  var firstHalf = Math.floor(encryptedText.length/2);
    for (let i = 0; i < n; i++) {
      var part1 = encryptedText.slice(0, firstHalf);
      var part2 = encryptedText.slice(firstHalf);
      var text = '';
      for (let k = 0; k < part2.length; k++){
        if (!part1[k]) text += part2[k];
        else text += part2[k] + part1[k];
      }
      encryptedText = text;
  }
  return encryptedText;
}