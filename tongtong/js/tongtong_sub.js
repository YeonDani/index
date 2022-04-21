// 햄버거메뉴
$('.toggle').click(function(){
  // 액티브일때
  if(
    $(this).hasClass('active')
  ){
    $('.fadeTab').fadeOut();
    $('.icon-menu').fadeOut();
    $(this).removeClass('active');

    $('.w_logo').css('display','none');
    $('.logo').css('display','block');

    // 헤더
    $('header').removeClass();
    $("header").css("height","100px");
          // 변수는 선언을 해야함 하나만 있으면 안됨

                // 메뉴랑 언어버튼
    $('header ul button').css('border-color','#575757');
    $('header ul button').css('color','#575757');
    $('.toggle span').css('background','#575757');
    
    var iw = window.innerWidth;
    if (iw < 641) {
      $("header").css("height","100px");
    }
  }
  

  // 액티브 아닐때
  else if(
    !$(this).hasClass('active')
  ){
    $(this).addClass('active');
    $('.fadeTab').fadeIn();
    $('.icon-menu').fadeIn();

    // 헤더
    $('header').addClass('fade1');
    $("header").css("height","100%");

    // 메뉴랑 언어버튼
    $('header ul button').css('border-color','white');
    $('header ul button').css('color','white');
    $('.toggle span').css('background','white');

    $('.w_logo').css('display','block');
    $('.logo').css('display','none');
  }
});




// 디스플레이, 포지션, 가로세로값 등등
// 하나하나 다 넣어보면서 뭐가 안맞는지 찾아보기

// 메뉴 안 탭메뉴
$(document).ready(function(){
// 탭메뉴 페이드박스 가로형
$(".fadeTab .conBox").hide().eq(0).show();
$(".tab-menu li").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    
    $("#"+$(this).data('id')).fadeIn(1000)
    .siblings('.conBox').fadeOut(300);

    $("header").removeClass().addClass($(this).data('id'))
});

// 처음부터 떠있지 않게
$(".fadeTab").css("display","none");
$(".icon-menu").css("display","none");
});




// 탑버튼
$(function(){
$(window).scroll(function(){
  if($(this).scrollTop() > 500){ //500 넘으면 버튼이 보여집니다.
    $('#top').fadeIn();
    $('#top').css('left',$('#sidebar').offset().left);
    // #sidebar left:0 죄표
  }else{$('#top').fadeOut();}
});
// 버튼클릭시
$('#top').click(function(){
  $('html,body').animate({
    scrollTop:0  // 0 까지 animation 이동합니다.
  },400);  // 속도 400
  return false;
});
});


// 서브페이지2의 첫번째 슬라이드
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});