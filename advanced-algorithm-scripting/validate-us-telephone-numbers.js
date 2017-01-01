// Validate US Telephone Numbers
// return true if the passed string is a valid US phone number

// LIST TO CHECK:
// country code (first letter) === 1
// number of digits after country code === 10
// parantheses must be closed
// only allowed characters are -() and digits

function telephoneCheck(str) {
  var regexObj = /^\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. /]*\(*[2-9]\d{2}\)*[-. /]*\d{3}[-. /]*\d{4} *e*x*t*\.* *\d{0,4}$/g;

  // if (regexObj.test(str)) {
  //   console.log('???');
  // }  

  return regexObj.test(str);
}


// is true
telephoneCheck("555-555-5555 peanut butter");

// is false
// telephoneCheck("6505552368");
