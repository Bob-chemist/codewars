var beeramid = function(bonus, price) {
  var maxNumOfCans = Math.floor(bonus/price);
  var level = 0;
  var canSum = 0;
  if (bonus <= 0) return 0;
  while (canSum <= maxNumOfCans) {
     ++level
     canSum += level**2;
     
  }
  return --level;
}