function sumTwoSmallestNumbers(numbers) {  
  var num = numbers.concat();
  num.sort(function(a,b) {return a-b;});
  return +num[0] + +num[1];
};