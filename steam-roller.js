// Flatten a nested array. You must account for varying levels of nesting.




function steamrollArray(arr) {

//   var flattenedArr = [];
//   var flatten = function(arg){
//     if(Array.isArray(arg)){
//      for(var a in arg){
//         flatten(arg[a]);
//       }
//     }else{
//       flattenedArr.push(arg);
//     }
//   };
//   arr.forEach(flatten);
  
//   return flattenedArr;
  
  
  return arr.reduce(function(x,y){
    return x.concat(Array.isArray(y)?steamrollArray(y) : y);
  },[]);
}

steamrollArray([1, [2], [3, [[4]]]]);

