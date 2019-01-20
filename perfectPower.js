var isPP = function(n){
 var i = 2;
 var simples = [];
 var simplesNumber = [];
 while (i<=n) {
  var amountOfSimples = 0;
  while (n%i == 0) {
	n /= i;  
	amountOfSimples++;
  }
  if (amountOfSimples) {
	simplesNumber.push(amountOfSimples);
	simples.push(i);
  }
  i++;
 }
var root = simplesNumber.reduce(function(x,y){
		while ( x && y ) {
			x > y ? x %= y : y %= x;
		}
		return x + y;
	});
if (root == 1) return null;
if (simplesNumber.length == 1) {
	return [simples[0], root];
}
else if (simplesNumber.length > 1) {
	var simplesNumber = simplesNumber.map(function(x){
		return x/root;
	});
}
var simpleRes = 1;
 for (let k = 0; k < simples.length; k++){
	 simpleRes *= Math.pow(simples[k], simplesNumber[k]);
 }
  return [simpleRes, root]; // fix me
  
}