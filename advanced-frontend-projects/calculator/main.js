jQuery(document).ready(function($) { 

  // ACTION CALLS
  ////////////////////////////

  $('.buttons .evaluate').on('click', evaluateDisplay);
  $('.buttons .clearall').on('click', clearAll);
  $('.buttons .element').on('click', clearLast);


  // FUNCTIONS
  ////////////////////////////

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
