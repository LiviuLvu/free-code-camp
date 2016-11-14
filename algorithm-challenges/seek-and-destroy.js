function destroyer(items) {

  var arrayOfArguments = arguments;

  function removeElements (e) {
    for (var i = 1; i < arguments.length; i++) {
      if (e === arrayOfArguments[i]) {
        console.log('no!' + arrayOfArguments[i]);
        return false;
      }
    }
    console.log('yes!' + e);
    return true;
  }

  var filteredArray = arguments[0].filter(removeElements);

  return filteredArray;
}

destroyer([8, 7, 1, 9, 9], 9, 8, 7);
