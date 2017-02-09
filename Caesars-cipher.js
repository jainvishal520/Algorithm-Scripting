//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
//Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.


function rot13(str) {
var unicodeArr = str.split('').map(function(x){
  var code = x.charCodeAt(0);
  if(code<65 || code>90){
    return x.charCodeAt(0);
  }else if(code<78){
     return code+13;
  }else{
    return code-13;
  }  
});
var newArr = [];
for(var i =0;i<unicodeArr.length;i++){
  newArr.push(String.fromCharCode(unicodeArr[i]));
}
return newArr.join('');
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
