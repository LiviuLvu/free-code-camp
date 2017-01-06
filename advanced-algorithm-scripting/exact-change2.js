// solution from stack overflow
// renamed some variables and added comments to explain all code
function checkCashRegister(price, cash, drawer) {
  // using only cents to calculate change
  var change = 100 * (cash - price);
  var moneyUnits = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  // record of amount taken out of drawer
  var amtToReturn = [];

  for (var i = drawer.length - 1; i >= 0; i--){
    var amtFromDrawer = 0;
    // find largest unit denominator && is there enough in drawer && was all change given to customer?
    while (moneyUnits[i] <= change && drawer[i][1] > 0 && change > 0){
      // reduce amount in drawer
      drawer[i][1] -= moneyUnits[i]/100;
      // reduce amount from change
      change -= moneyUnits[i];
      // money taken out of drawer
      amtFromDrawer += moneyUnits[i]/100; 
    }
    if (amtFromDrawer !== 0){
      // [money unit name, amount]
      amtToReturn.push([drawer[i][0], amtFromDrawer]);
    }
  }

  // if there is still some change left over
  if (change !== 0){
    return "Insufficient Funds";
  }

  // if there is any money left in drawer
  for (var j = 0; j < drawer.length; j++){
    if (drawer[j][1] > 0){
      return amtToReturn;
    }
  }

  // if register is empty
  return "Closed";
}

checkCashRegister(18.50, 20.00, [["PENNY", 0.00], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 0.00]]);
