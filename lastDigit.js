var lastDigit = function(str1, str2){  
  var lastDigit = +str1.slice(-1);
  var power = +str2.slice(-2);
  if (str2 === "0") return 1;
  else if (lastDigit === 0) return 0;
  else if (lastDigit === 1) return 1;
  else if (lastDigit === 2) {
    if (power%4 === 1) return 2;
    if (power%4 === 2) return 4;
    if (power%4 === 3) return 8;
    if (power%4 === 0) return 6;
  }
  else if (lastDigit === 3) {
    if (power%4 === 1) return 3;
    if (power%4 === 2) return 9;
    if (power%4 === 3) return 7;
    if (power%4 === 0) return 1;
  }
  else if (lastDigit === 4) {
    if (power%2 === 1) return 4;
    if (power%2 === 0) return 6;
  }
  else if (lastDigit === 5) return 5;
  else if (lastDigit === 6) return 6;
  else if (lastDigit === 7) {
    if (power%4 === 1) return 7;
    if (power%4 === 2) return 9;
    if (power%4 === 3) return 3;
    if (power%4 === 0) return 1;
  }
  else if (lastDigit === 8) {
    if (power%4 === 1) return 8;
    if (power%4 === 2) return 4;
    if (power%4 === 3) return 2;
    if (power%4 === 0) return 6;
  }
  else if (lastDigit === 9) {
    if (power%2 === 1) return 9;
    if (power%2 === 0) return 1;
  }
}