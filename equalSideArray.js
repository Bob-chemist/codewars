function findEvenIndex(arr)
{
var left = 0; var right = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var r = i+1; r  < arr.length; r++) {
       right += arr[r];
    }
    
    for (var l = 0; l < i; l++ ) {
      left += arr[l];
    }
    if (right == left) return i;
    left = right = 0;
  }
  return -1;
}