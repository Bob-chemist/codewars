function findOdd(A) {
  for (var i = 0; i < A.length; i++) {
    var arr = A.filter(function(k) {return A[i] == k});
    if (arr.length%2 != 0) {
     break;
    }
  }
  return A[i];
}