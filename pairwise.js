// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
// Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.



function pairwise(arr, arg) {
  var reArr=[];
for(var i=0;i<arr.length;i++){
  for(var j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j] === arg){
      if(!(reArr.includes(i) || reArr.includes(j))){
        reArr.push(i,j);
      }
      
    }
  }
}
  return reArr.length===0?0:reArr.reduce((a,b) => a+b);
  // return reArr
  // return arg;
}
