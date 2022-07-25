module.exports = function findItemsOver20(list){
  var itemsOver20 = [];
  
  for(var i = 0; i < list.length; i++){
      var items = list[i];
      if(items.qty> 20){
        itemsOver20.push(items)
        }
      }
   return itemsOver20;
   
    }
  