module.exports = function isWeekday(day){
    var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    if( weekDay.includes(day)){
      return true;
      }else{
        return false;
        }
    }