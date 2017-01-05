// solution from stack overflow
// need to study and understand code
function checkCashRegister(price, cash, cid) {
  var change = 100 * (cash - price);
  var availableFunds = 0;

  var moneyValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var amtToReturn = [];

  for (var i = cid.length - 1; i >= 0; i--){
    var amt = 0;
    while (moneyValues[i] <= change && cid[i][1] > 0 && change > 0){
      console.log("subtracting " + moneyValues[i]);
      cid[i][1] -= moneyValues[i]/100; // reduce amount in cid
      change -= moneyValues[i]; // reduce amount from change
      amt += moneyValues[i]/100; // keep track of how much money was taken out of cid
    }
    if (amt !== 0){
      // adds record of amount taken out of cid
       amtToReturn.push([cid[i][0], amt]);
    }
  }


  // if there is still some change left over
  if (change !== 0){
    console.log("broke");
    console.log(change);
    return "Insufficient Funds";
  }

  // if there is any money left in cid, it returns amtToReturn
  for (var j = 0; j < cid.length; j++){
    if (cid[j][1] > 0){
      console.log(amtToReturn);
      return amtToReturn;
    }
  }

  // if register is empty
  console.log("closed");
  return "Closed";

}

checkCashRegister(0.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
