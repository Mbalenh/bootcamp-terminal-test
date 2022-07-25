module.exports = function countRegNumber(regNums){
    let regArray = regNums.split(',');
    let countReg= 0;
    for(var i=0; i< regArray.length; i++){
      const reg = regArray[i].trim();
      if(regNums.startsWith(regNums)){
         countReg++
    } 
 }
    return countReg;
  }