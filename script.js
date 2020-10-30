$(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 170) {
        $('.navbar-css').addClass('custom-navbar');
    }
    else {
        $('.navbar-css').removeClass('custom-navbar');
    }
});
$(document).ready(function () {
    // alert("width of carousel " + $(".carousel-item").width());
    // let position1= $(this).scrollRight();
    // console.log("the position of width is  " + position1);
    console.log("width of carousel " + $(".carousel-item").width());
});