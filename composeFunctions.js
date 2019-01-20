var compose = function() {
  var arg = arguments[0];
  for (let i = 1; i< arguments.length; i++) {
    arg = arguments[i](arg);
  } 
  return arg;
}