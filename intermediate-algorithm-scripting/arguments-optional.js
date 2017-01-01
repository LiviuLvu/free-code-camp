// function adds 2 arguments
// if only one argument is detected return a function
// the returned function adds the last and current parameter
function addTogether(a, b) {

  if (arguments.length > 1) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return undefined;
    }
    return a + b;
  }
  else if (arguments.length === 1) {
    if (typeof a !== 'number') {
      return undefined;
    }

    return function(b) {
      if (typeof b !== 'number') {
        return undefined;
      } 
      else return a + b;
    };

  }
}

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3);
addTogether(2)(3);

