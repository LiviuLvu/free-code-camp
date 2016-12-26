function convertHTML(str) {

  // search match in object, using key name as match 
  function htmlCodes(match) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
    return map[match];
  }
  
  // search group of symbols
  test = /[&<>"']/g;

  return str.replace(test, htmlCodes);
}

convertHTML('Stuff in "quotation marks" and & greater > smaller <');

