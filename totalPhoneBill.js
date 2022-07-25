module.exports = function totalPhoneBill(callOrSms){
    var callandSmsArray = callOrSms.split(', ');
    var callBill = 0;
    var smsBill = 0;
    for(var i = 0; i < callandSmsArray.length; i++){
      var bill = callandSmsArray[i];
      if(bill === 'call'){
        callBill += 2.75;
        }else{
          smsBill += 0.65;
          }
      }
    var totalBill = callBill + smsBill;
   return 'R' + totalBill.toFixed(2);
  }