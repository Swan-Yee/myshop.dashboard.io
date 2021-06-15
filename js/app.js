// To show menu layout when ph screen
$(".show-side-bar-btn").click(function () {
    $(".aside").animate({marginLeft: "0"});
})

$(".hide-side-bar-btn").click(function () {
    $(".aside").animate({marginLeft: "-100%" });
})


$(function () {
  $('[data-toggle="popover"]').popover()
})

// fullscreen

$('.full-screen').click(function () {
  let current=$(this).closest(".card")
  $(this).closest(".card").toggleClass('full-screen-card');
  if (current.hasClass("full-screen-card")) {
    $(this).html(`<i class="feather-minimize-2"></i>`);
  }
  else {
    $(this).html(`<i class="feather-maximize-2"></i>`)
  }
})

$(document).ready(function() {
    $('#list').DataTable();
} );