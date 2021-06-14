// To show menu layout when ph screen
$(".show-side-bar-btn").click(function () {
    $(".aside").animate({marginLeft: "0"});
})

$(".hide-side-bar-btn").click(function () {
    $(".aside").animate({marginLeft: "-100%" });
})