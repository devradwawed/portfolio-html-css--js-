var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  speed:1000,
  mousewheel:{
    
  }

})
mySwiper.on("slideChangeTransitionStart" , function () {

  $(".swiper-slide").css("transform" , "scale(.8)");

}).on("slideChangeTransitionEnd" , function() {

  $(".swiper-slide").css("transform" , "scale(1)");

})



// toggleBtn
$(".toggleBtn").on("click" , function () {

  $(this).toggleClass("close");
  $(".overlay-menu").toggleClass("show");

})