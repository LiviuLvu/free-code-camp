function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        // for any number of arguments, push each to "args" array
        args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                // if item does not exist in "arrayTwo" and also not in "result"
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

// sym([1, 2, 3], [5, 2, 1, 4], [5, 2, 7]);
sym([1, 2, 3]);
