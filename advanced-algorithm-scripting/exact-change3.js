// solution from Rafase282
// this is failing for one test on FCC
// attempting to make it work
// need to understand code

function checkCashRegister(price, cash, cid) {

  // Total Amount to return to client
  var totalChange = +(cash - price).toFixed(2);

  //Standard currency Value
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  //Name of current currency
  var currType;

  // How many of the current standard currency
  var stdCurrAmount;
  var currCurrency;

  // Change to be returned in proper format.
  var changeArr = [];

  var totalCash = +cid.map(function(money) {
    // Gets 1D array of values
    return money[1];
  }).reduce(function(cash1, cash2) {
    // Reduces the values to one number
    return cash1 + cash2;
    // Rounds to two decimal places
  }).toFixed(2);

  // Handle the case where we don't have enough money or will be left without money.
  if (totalChange > totalCash) {
    return 'Insufficient Funds';
  } else if (totalChange === totalCash) {
    return 'Closed';
  }

  // Loops array from right to left.
  for (var i = +cid.length - 1; i >= 0; i--) {
    // Gets the monetary value of the current array and the type.
    currCurrency = +cid[i][1].toFixed(2);
    currType = cid[i][0];

    //If the currency is less than the change left to hand then get the right amount from the current type of change.
    if (+stdCurr[i].toFixed(2) <= +totalChange.toFixed(2)) {

      stdCurrAmount = Math.floor(currCurrency / stdCurr[i]);

      if ((stdCurr[i] * stdCurrAmount) >= totalChange) {
        stdCurrAmount = Math.floor(totalChange / stdCurr[i]);
      }

      //Get the current currency to use and udate the amount left to hand out.
      currCurrency = +(stdCurr[i] * stdCurrAmount).toFixed(2);
      totalChange = +(totalChange - currCurrency).toFixed(2);

      // Update the values so we always have the current amount left in the register.
      cid[i][1] = currCurrency;

      //Push the change right change to hand out
      changeArr.push([currType, currCurrency]);
    }
  }

  return changeArr;
}

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
