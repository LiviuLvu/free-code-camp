function truncateString(str, num) {
  // if str larger than number of characters, truncate and add "..."
  // if num <= 3, keep string length unchanged and add "..." ending
  if (num <= 3) {
    num = num;
  }
  else if (str.length === num || str.length < num) {
    return str;
  }
  else {
    num = num - 3;
  }

  newString = str.slice(0, num) + '...';

  console.log(newString);

  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
