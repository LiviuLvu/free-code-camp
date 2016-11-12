// remove all non-alphanumeric characters, convert to lower case;
// reverse str;
// compare original str with reversed str;
// if they are equal, return true, otherwise false;

function palindrome(str) {
  var reverseStr, originalCleanStr;
  
  originalCleanStr = str.toLowerCase().replace(/[^a-z0-9]/ig,'');
  
  reverseStr = originalCleanStr.split('').reverse().join('');

  console.log(reverseStr);
  
  if (reverseStr === originalCleanStr) {
    return true;
  }
  return false;
}

palindrome("eyeEye Eye_, 0_0 (: /-\ :) 0-0");
