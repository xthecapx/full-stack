$(function () {
  $('#datePicker').datetimepicker({
    locale: 'en',
    viewMode: 'days',
    format: 'DD/MM/YYYY'
  });
  $('#hourPicker').datetimepicker({
    format: 'LT'
  });
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function() {
    $("#mycarousel").carousel('pause');
  });

  $("#carousel-play").click(function() {
    $("#mycarousel").carousel('cycle');
  });
});
