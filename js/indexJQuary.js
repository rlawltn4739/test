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
      search_icon.attr('src','../img/icon/search_w.png')

    }else if($window.scrollTop()>120 && top_ad.css('display')
    =='none'){
     navWrap.addClass('nav-sticky');
     navlogo.attr('style','display: block;');
     search_icon.attr('src','../img/icon/search_w.png')

   }else{
    navWrap.removeClass('nav-sticky');
    navlogo.attr('style','display: none;');
    search_icon.attr('src','../img/icon/search.png')
  }

});


/*네비스크롤*/
var navLink= $('.top_nav');
var scroll= $('#scroll');
var nav=$('#nav_wrapper');


navLink.mouseenter(function(){



  scroll.stop().slideDown();
});
nav.mouseleave(function(){

  scroll.stop().slideUp();
});



$('.navbar-toggler').click(function(){
  $('.navbar-collapse').hide()
  scroll.stop().slideDown();


})

// 비디오제어
var video1=$('#video1').get(0)
var playbtn=$('#play_btn');
var sound_btn=$('#sound_btn');

playbtn.click(function(){
  if (playbtn.hasClass('pause')===false) {
    video1.pause();
    playbtn.addClass('pause');
    playbtn.css('background-image','url(img/icon/play_w.png)');
  }else{
    video1.play();
    playbtn.removeClass('pause');
    playbtn.css('background-image','url(img/icon/pause.png)');
  }

});
sound_btn.click(function(){
  if (video1.muted ===true) {
    video1.muted =false;
    sound_btn.css('background-image','url(img/icon/soundOn.png)');
  }else{
    video1.muted =true;
    sound_btn.css('background-image','url(img/icon/soundOff.png)');

  }


});

// 이벤트 캐로셀
var pbtn=$('#p_btn');
var nbtn=$('#n_btn');

pbtn.hide();

nbtn.click(function(){
 $('#ev_carousel ol').css("left",0).animate({"left":"-33.33333%"})
 $(this).hide();
 pbtn.show();

});
pbtn.click(function(){

  $('#ev_carousel ol').animate({"left":0})
  $(this).hide();
  nbtn.show();
});

var special_btn=$('#special_wrap .nav-pills .nav-link')
var del_border=$('#special_wrap .nav-pills .nav-link.active')


special_btn.click(function(){
  special_btn.removeClass('bb_none')

  $(this).next().addClass('bb_none')


});
























});