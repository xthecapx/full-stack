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
