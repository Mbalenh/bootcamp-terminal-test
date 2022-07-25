module.exports = function countAllPaarl(regNums){
  var regs = regNums.split(', ');;
  var counter = 0;
  for (var i= 0 ; i< regs.length;i++){
    var reg = regs[i];
    if(reg.startsWith('CJ')){
      counter++
      }
    }
  return counter;
  }