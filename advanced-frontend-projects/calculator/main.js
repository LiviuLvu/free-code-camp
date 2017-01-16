// delete all
// delete last nr entered - perhaps using regex
// basic operations
// evaluate only on enter
// equal -> get input field and evaluate string

var displayVal = $('.display').val();

jQuery(document).ready(function($) {
  
  ////////////////////////////
  // ACTION SELECTORS
  ////////////////////////////

  $('.buttons input').on('click', writeToDisplay);

});
  

  ////////////////////////////
  // FUNCTIONS
  ////////////////////////////

  function writeToDisplay () {

    var btnVal = $(this).val();
    console.log(displayVal);
    displayVal += btnVal;
    console.log(displayVal);

    $('.display').val(displayVal + btnVal);
    
  }

  // function for evaluateDisplay

  // function for clear
  // function for clear last element

  // use tab to show advanced functions
