function superStreetFighterSelection(fighters, [ver, hor], moves){
  var positionVert = ver; 
  var positionHor = hor; 
  var rowLength = fighters[0].length;
  var path = []
  
  function checkPosV (posV, posH) {
   if (posV < 0 || posV > fighters.length-1) return false;
   else if (fighters[posV][posH] === '')  return false;
   return true;
  }
  function checkPosH(posV, posH) {
    if (fighters[posV][posH] === '')  return false;
    return true;
  }
  function move(str) {
    switch (str) {
      case "up":    if (checkPosV(positionVert-1, positionHor)) {
                      positionVert--;
                    }
                    break;
      case "down":  if (checkPosV(positionVert+1, positionHor)) {
                      positionVert++;
                    }
                    break;
      case "left":  do {
                      positionHor--;
                      if (positionHor < 0) positionHor = fighters[0].length-1;
                    }
                    while(!checkPosH(positionVert, positionHor));
                    break;
      case "right": do {
                      positionHor++;
                      if (positionHor > fighters[0].length - 1) positionHor = 0;
                    }
                    while(!checkPosH(positionVert, positionHor)); 
                    break;
      }
    return path.push(fighters[positionVert][positionHor]);
      
  }

 for (let i = 0; i < moves.length; i++) {
   move(moves[i]);
 }
  
  return path;
}