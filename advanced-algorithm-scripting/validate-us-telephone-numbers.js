// Validate US Telephone Numbers
// return true if the passed string is a valid US phone number

// LIST TO CHECK:
// country code (first letter) === 1
// number of digits after country code === 10
// parantheses must be closed
// only allowed characters are -() and digits

function telephoneCheck(str) {
  var regexObj = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;

  return regexObj.test(str);
}

telephoneCheck("555-555-5555");
