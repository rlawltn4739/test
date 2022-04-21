$(function (argument) {
  var top_ad=$('#top_ad');
  var x_btn =$('#close_top_ad');
  var winSize=$(window).width()
  x_btn.click(function(){
    top_ad.hide();

  })

  var navWrap=$('#nav_wrapper');
  var navlogo=$('#navStickyLogo');
  var search_icon=$('#search_icon');
  var $window=$(window);
  /*네비 스크립트*/
  $window.on('scroll',function(){
    if($window.scrollTop()>200 && top_ad.css('display')
    !='none') {
      navWrap.addClass('nav-sticky');
      navlogo.attr('style','display: block;');
      search_icon.attr('src','img/icon/search_w.png')

    }else if($window.scrollTop()>120 && top_ad.css('display')
    =='none'){
     navWrap.addClass('nav-sticky');
     navlogo.attr('style','display: block;');
     search_icon.attr('src','img/icon/search_w.png')

   }else{
    navWrap.removeClass('nav-sticky');
    navlogo.attr('style','display: none;');
    search_icon.attr('src','img/icon/search.png')
  }

});


/*네비스크롤*/
var navLink= $('.top_nav');
var scroll= $('#scroll');
var nav=$('#nav_wrapper');


navLink.mouseenter(function(){



  scroll.slideDown();
});
nav.mouseleave(function(){

  scroll.slideUp();
});



$('.navbtn1').click(function(){
  $('.mainnav').hide()
  scroll.stop().slideDown();


})


});