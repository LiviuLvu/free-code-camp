jQuery(document).ready(function($) { 
  // var clearVal;
  var displayVal;
    ////////////////////////////
  // ACTION SELECTORS
  ////////////////////////////

  // $('.buttons .operate').on('click', writeToDisplay);
  $('.buttons .evaluate').on('click', evaluateDisplay);
  $('.buttons .clearall').on('click', clearAll);
  $('.buttons .element').on('click', clearLast);

  ////////////////////////////
  // FUNCTIONS
  ////////////////////////////

  function writeToDisplay() {

    var btnVal = $(this).val();
    
    // remove the "0" placeholder when starting 
    if(displayVal === '0') {
      displayVal = '';
    }
    
    // clearVal = displayVal + btnVal;
    // displayVal += btnVal;
    $('.display').val(displayVal += btnVal);

    // ensure cursor to end of line for overflows
    // $('.display').focus();
    // $('.display').scrollLeft = $('.display').scrollWidth;

  }

  // function for evaluateDisplay
  function evaluateDisplay() {
    console.log('eval');
    
    displayVal = $('.display').val();
    equation = displayVal.replace(/x/g, '*');
    $('.display').val(eval(equation));

  }

  // function for clearAll
  function clearAll() {
    console.log('clearall');

    $('.display').val('');
  
  }

  // function for clear last element
  function clearLast() {
    console.log('clearLast');

    var string = $('.display').val().slice(0, -1);
    $('.display').val(string);
    console.log(string);

  }

  // future upgrades
  // keyboard interaction
  // use tab to show advanced functions

});
