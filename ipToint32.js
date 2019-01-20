function ipToInt32(ip){
  return parseInt((ip.split('.').map(i => {
      var binary = (+i).toString(2);
      while (binary.length < 8) binary = '0' + binary;
      return binary;
    }).join('')), 2); //.toString(32);
}