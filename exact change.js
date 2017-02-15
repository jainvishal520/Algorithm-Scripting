// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.




function checkCashRegister(price, cash, cid) {
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

  var change = cash-price;
  var total = cid.reduce(function(a,b){
    return a+b[1];
  },0.0);
  if(change>total){
    return "Insufficient Funds";
  }else if(change === total){
    return "Closed";
  }
  // Here is your change, ma'am.
  cid = cid.reverse();
  var result = denom.reduce(function(acc,next,index){
    if(change>=next.val){
      var current = 0;
      while(change>=next.val && cid[index][1]>=next.val){
        
        current += next.val;
        change -= next.val;
        change = Math.round(change*100)/100;
        cid[index][1] -= next.val;
      }
      acc.push([next.name,current]);
    }
    return acc;
  },[]);
  return result.length>0 && change ===0 ? result : "Insufficient Funds";
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
