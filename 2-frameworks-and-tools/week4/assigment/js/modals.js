$(document).ready(function() {
  $(".loginToogle").on('click', function() {
    $("#loginModal").modal("toggle");
  });

  $(".toggleReserve").on('click',function() {
    $("#reserveModal").modal("toggle");
  });
});
