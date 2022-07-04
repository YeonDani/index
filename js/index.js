jQuery(document).ready(function(){

  setInterval(function(){
    $('.slideWrap').animate({'margin-left':'-100%'},function(){
        $('.slide:first').appendTo('.slideWrap')
        $('.slideWrap').css({'margin-left':'0px'})
    })
},3000);

});



$(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > 500){
          $('#top').fadeIn();}
      });
      $('#top').click(function(){
        $('html,body').animate({
          scrollTop:0
        },400);
        return false;
      });
  });




