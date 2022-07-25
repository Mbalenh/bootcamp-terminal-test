module.exports =function findItemsOver(list, threshold){
    var OverThreshold = [];
   
    for(var i = 0; i < list.length; i++){
      var items = list[i];
      console.log(items)
      if(items.qty> threshold){
        OverThreshold.push(items)
        }
      }
    return OverThreshold;
  }
