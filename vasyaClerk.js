function tickets(peopleInLine){
  if (peopleInLine[0] != 25) return 'NO';
  var twfv = 1;
  var fifty = 0;
  for (var i = 1; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) twfv++;
    else if (peopleInLine[i] == 50) { 
    twfv--;
    fifty++;
  }
    else if (peopleInLine[i] == 100) {
      if (fifty > 0) {
        fifty--;
        twfv--;
      } else {
          twfv -= 3;
        }
    }
    if (twfv < 0) return 'NO';
  }
  return 'YES';
}