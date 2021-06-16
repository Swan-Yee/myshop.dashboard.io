var animation = bodymovin.loadAnimation({
            // animationData: { /* ... */ },
            container: document.getElementById('loading-container'), // required
            path: 'https://assets2.lottiefiles.com/packages/lf20_y9dfylgv.json', // required
            renderer: 'svg', // required
            loop: true, // optional
            autoplay: true, // optional
            name: "Demo Animation", // optional
        });

$(window).on("load", function () {
    $('.loader-container').fadeOut(1000,function () {
        $(this).remove();
    });
});

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