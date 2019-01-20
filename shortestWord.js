function findShort(s){
 return s.split(' ').reduce(function(shortest, current) {
   return shortest > current.length ?  current.length :  shortest;
 }, s.length);
}