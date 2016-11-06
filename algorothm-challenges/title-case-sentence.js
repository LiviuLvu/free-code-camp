function titleCase(str) {
  // split sentence in array
  toTitleCase = str.split(' ')
    // apply uppercase to each array element and add the remaining letters in lowercase
    .map(function(element){
      return element.charAt(0).toUpperCase() + element.substr(1).toLowerCase();
    })
    .join(' ');

  return toTitleCase;
}

titleCase("I'm a little tea pot");
