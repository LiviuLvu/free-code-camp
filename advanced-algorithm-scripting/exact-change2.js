// solution from stack overflow
// need to study and understand code
function checkCashRegister(price, cash, inDrawer) {
  var change = 100 * (cash - price);
  var availableFunds = 0;

  var moneyUnits = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var amtToReturn = [];

  for (var i = inDrawer.length - 1; i >= 0; i--){
    var amt = 0;
    while (moneyUnits[i] <= change && inDrawer[i][1] > 0 && change > 0){
      console.log("subtracting " + moneyUnits[i]);
      // reduce amount in inDrawer
      inDrawer[i][1] -= moneyUnits[i]/100;
      // reduce amount from change
      change -= moneyUnits[i];
      // keep track of how much money was taken out of inDrawer
      amt += moneyUnits[i]/100; 
    }
    if (amt !== 0){
      // adds record of amount taken out of inDrawer
       amtToReturn.push([inDrawer[i][0], amt]);
    }
  }

  // if there is still some change left over
  if (change !== 0){
    return "Insufficient Funds";
  }

  // if there is any money left in inDrawer, it returns amtToReturn
  for (var j = 0; j < inDrawer.length; j++){
    if (inDrawer[j][1] > 0){
      return amtToReturn;
    }
  }

  // if register is empty
  return "Closed";
}

checkCashRegister(0.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
