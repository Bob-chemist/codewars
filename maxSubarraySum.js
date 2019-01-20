var maxSequence = function(arr){
  if (!arr.length) return 0;
  var resSum = arr.reduce(function(sum, current) {
    return sum+current;
    });
  while (arr[0] <=0) {
    arr.shift();
  };
  while (arr[arr.length-1] <= 0) {
    arr.pop();
  }
  for (i = 0; i < arr.length; i++) {
      arr.reduce(function(sum, current, index) {
      if (i >= index) return arr[i];
      let resSmall = sum+current;
      if (resSmall > resSum) resSum = resSmall;
      if (resSmall < 0) return 0;
      return resSmall;
    });
  };
  if (resSum < 0) return 0;
  return resSum;
}