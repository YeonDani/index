jQuery(document).ready(function(){

    $('header').mouseover(function(){
        $(this).find('.submenu>li').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu>li').stop().slideUp(500);
    });


    
    var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-3');
    if(
      $(this).hasClass('active-3')
    ){
      $('.menu').css('display','block');
      $('.biglogo').css('display','block');
      $('header').css('height','100vh');
    }
    
    else if(
      !$(this).hasClass('active')
    ){
      $('.menu').css('display','none');
      $('.biglogo').css('display','none');
      $('header').css('height','90px');
    }
  })
});



$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});

    

      var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });


$(document).ready(function(){
  $(".tab ul li").click(function(){
      $(this).addClass('on')
              .siblings().removeClass('on');
      $("#"+$(this).data('id')).addClass('on')
              .siblings().removeClass('on');
  });
});



});