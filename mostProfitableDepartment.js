module.exports = function mostProfitableDepartment(data){

   var deptMap = {};
  for (var i = 0; i < data.length; i++){
    var dept = data[i];
    deptMap[dept.department] = 0;
    }
 for(var i = 0; i < data.length; i++){
   const dept = data[i];
   deptMap[dept.department] += dept.sales;
   }
    console.log(deptMap)
    var highestValueindex = 0;
    var currDeptindex = '';
    for(var dept in deptMap){
 var currValueindex = deptMap[dept];
 if(currValueindex > highestValueindex){
  highestValueindex = currValueindex;
   var currentDeptindex = dept;
   }
    }
    return currentDeptindex;
    }

    