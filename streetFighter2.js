function streetFighterSelection(fighters, position, moves){
  var positionVert = position[0];
  var positionHor = position[1];
  var path = []
  //path.push(fighters[positionVert][positionHor]);
  function move(str) {
    switch (str) {
      case "up":    if (positionVert == 1) positionVert = 0;
                    break;
      case "down":  if (positionVert == 0) positionVert = 1;
                    break;
      case "left":  --positionHor;
                    if (positionHor < 0) positionHor = 5;
                    break;
      case "right":  ++positionHor;
                    if (positionHor > 5) positionHor = 0;
                    break;
      }
    return path.push(fighters[positionVert][positionHor]);
      
  }

 for (let i = 0; i < moves.length; i++) {
   move(moves[i]);
 }
  
  return path;
  }