function isValidWalk(walk) {
  if (walk.length != 10) return false;
  var route = {
    n : 0,
    s : 0,
    e : 0,
    w : 0
  };
  walk.forEach(i => {
    switch (i) {
      case 'n' : ++route.n;
                  break;
      case 's' : ++route.s;
                  break;
      case 'e' : ++route.e;
                  break;
      case 'w' : ++route.w;
                  break;
    }
  });
  return route.n == route.s && route.e == route.w ?  true : false;
}