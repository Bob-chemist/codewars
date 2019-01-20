function sortArray(array) {
  var odd = array.filter(i => i%2).sort((a, b) => a-b);
  return array.map((item, i) => item%2 ? array[i] = odd.shift() : array[i])
}