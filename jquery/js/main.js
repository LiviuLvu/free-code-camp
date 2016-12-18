$(document).ready(function() {

  setTimeout(function() {
   $('#target1').css('color', 'red');
   $('#target1').prop('disabled', true);
   $('#target2').appendTo('#right-well');
   $('#target5').clone().appendTo('#left-well');
   $('#target1').parent().css('background-color', 'red');
   $("#right-well").children().css("color", "orange");
   $(".target:nth-child(2)").addClass("animated bounce");
   $(".target:even").addClass("animated shake");
  }, 1000);


  setTimeout(function() {
   $("body").addClass("animated hinge");
  }, 3000);

});
