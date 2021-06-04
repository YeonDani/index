// 스크롤 이미지 애니메이션

$(document).ready(function() {
    $(window).scroll( function(){
    $('.intro').fadeOut()
    });
});


$(document).ready(function() {
  $('.vid1').bind("ended",function() {
    $(this).fadeOut();
  })
})




// 섹션1
  var swiper1 = new Swiper('.swiper-container.sec1', {
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
      el: '.swiper-pagination.sec1',
      clickable: true,
    },
  });





// 햄버거메뉴
  $('.toggle').click(function(){
    // 액티브일때
    if(
      $(this).hasClass('active')
    ){
      $('.fadeTab').fadeOut();
      $('.icon-menu').fadeOut();
      $(this).removeClass('active');

      // 헤더
      $('header').removeClass();
      $("header").css("height","100px");
            // 변수는 선언을 해야함 하나만 있으면 안됨
      var iw = window.innerWidth;
      if (iw < 641) {
        $("header").css("height","100px");
      }

      // 메뉴랑 언어버튼
      $('header ul button').css('border-color','#575757');
      $('header ul button').css('color','#575757');
      $('.toggle span').css('background','#575757');
      
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
    }
  });





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








// 아래 게시판
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}





// 섹션2
    var swiper2 = new Swiper('.swiper-container.sec2-dv', {
      centeredSlides: true,
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
      
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    
      pagination: {
        el: '.swiper-pagination.sec2-dv',
        clickable: true,
      },
    });




// 섹션2-컨텐츠
var swiper3 = new Swiper('.swiper-container.benefit', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  }
  
  // 괄호조심
});









// 모바일에 따라 스와이프 바꾸려면 
// responsive breakpoints 에서 브레이크포인트
// 키값 가져와야함.

// 섹션3
var swiper4 = new Swiper('.swiper-container.Bs', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination.Bs',
    clickable: true,
  },
});







// 섹션4
var swiper5 = new Swiper('.swiper-container.books', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 25,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});


















