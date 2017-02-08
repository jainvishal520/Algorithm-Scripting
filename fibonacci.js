//Given a number N return the index value of the Fibonacci sequence, where the sequence is:

//*************** For loop solution(O(n) time complexity) ***********//
function fibonacci(num){
var a=1,b=0,temp;
while(num>=0){
  temp = a;
  a = a+b;
  b=temp;
  num--
}
return b;
}


//*************** While loop solution(O(n) time complexity) ***********//
function fibonacci(num){
  var a=1,b=0,temp;
  for(var i = 0;i<=num;i++){
    temp = a;
    a= a+b;
    b =temp;
  }
  return b;
}


//*************** Recursive solution(O(2^n) time complexity) ***********//
function fibonacci(num){
return (num<=1)?1:fibonacci(num-1)+fibonacci(num-2);
}


fibonacci(6)//1,1,2,3,5,8,13......