$(document).ready(function() {
    $(window).click( function(){
    $('.intro').fadeOut()
    });
});
$(document).ready(function() {
  $('.vid1').bind("ended",function() {
    $(this).fadeOut();
  })
})

  var swiper1 = new Swiper('.swiper-container.fourth', {
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
      el: '.swiper-pagination.fourth',
      clickable: true,
    },
  });


  $('.toggle').click(function(){
    if(
      $(this).hasClass('active')
    ){
      $('.fadeTab').fadeOut();
      $('.icon-menu').fadeOut();
      $(this).removeClass('active');

      $('.w_logo').css('display','none');
      $('.logo').css('display','block');

      $('header').removeClass();
      $("header").css("height","100px");

      $('header ul button').css('border-color','#575757');
      $('header ul button').css('color','#575757');
      $('.toggle span').css('background','#575757');
      
      var iw = window.innerWidth;
      if (iw < 641) {
        $("header").css("height","100px");
      }
    }
    

    else if(
      !$(this).hasClass('active')
    ){
      $(this).addClass('active');
      $('.fadeTab').fadeIn();
      $('.icon-menu').fadeIn();
  
      $('header').addClass('fade1');
      $("header").css("height","100%");

      $('header ul button').css('border-color','white');
      $('header ul button').css('color','white');
      $('.toggle span').css('background','white');

      $('.w_logo').css('display','block');
      $('.logo').css('display','none');
    }
  });


$(document).ready(function(){
  $(".fadeTab .conBox").hide().eq(0).show();
  $(".tab-menu li").click(function(){
      $(this).addClass('on').siblings().removeClass('on');
      
      $("#"+$(this).data('id')).fadeIn(1000)
      .siblings('.conBox').fadeOut(300);

      $("header").removeClass().addClass($(this).data('id'))
  });

  $(".fadeTab").css("display","none");
  $(".icon-menu").css("display","none");
});




var swiper2 = new Swiper('.swiper-container.sec-dv', {
  centeredSlides: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination.sec-dv',
    clickable: true,
  },
});


var swiper3 = new Swiper('.swiper-container.benefit', {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: true,
loopFillGroupWithBlank: true,

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

breakpoints: {
640: {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
},
}
});





var swiper4 = new Swiper('.swiper-container.Bs', {
slidesPerView: 1,
loop: true,
pagination: {
el: '.swiper-pagination.Bs',
clickable: true,
},
});




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

breakpoints: {
  640: {
    spaceBetween: -5,
  },
  }
});


$(document).ready(function(){
  $(".tab ul li").click(function(){
      $(this).addClass('on')
              .siblings().removeClass('on');
      $("#"+$(this).data('id')).addClass('on')
              .siblings().removeClass('on');
  });
});


$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('#top').fadeIn();
      $('#top').css('left',$('#sidebar').offset().left);
    }else{$('#top').fadeOut();}
  });

  $('#top').click(function(){
    $('html,body').animate({
      scrollTop:0 
    },400);
    return false;
  });
});