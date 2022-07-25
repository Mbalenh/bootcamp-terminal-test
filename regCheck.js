module.exports = function regCheck(regNums,regEnd){
    if(regNums.endsWith(regEnd)){
      return true;
    }else{
      return false;
      }
    }