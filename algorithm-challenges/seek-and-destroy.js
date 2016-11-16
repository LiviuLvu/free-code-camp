function destroyer(items) {

  var arrayOfArguments = arguments;

  function removeElements (e) {
    for (var i = 1; i < arguments.length + 1; i++) {
      if (e === arrayOfArguments[i]) {
        console.log('hey!' + arrayOfArguments[i]);
        return false;
      }
    }
    console.log('yo!');
    return true;
  }

  var filteredArray = arguments[0].filter(removeElements);

  return filteredArray;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
