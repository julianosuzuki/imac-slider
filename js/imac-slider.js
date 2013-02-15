$(function(){
  var $imac     = $('.imac'),
      $imgs     = $imac.find('img'),
      totalImgs = $imgs.length - 1,
      speed     = '3000';

  $imac
    .append('<div class="arrow"><a href="#" class="aleft" /><a href="#" class="aright" /></div>');

  $imgs
    .not(':first')
    .css('display', 'none')
    .addClass('hidden');

  var slideNext = function(target) {
    target.next().fadeOut(0).removeClass('hidden').fadeIn('slow');
  }
  var slidePrev = function(target) {
    target.prev().fadeOut(0).removeClass('hidden').fadeIn('slow');
  }
  var slideFirst = function(target) {
    target.closest($imac).find('img:first').fadeOut(0).removeClass('hidden').fadeIn('slow');
  }
  var slideLast = function(target) {
    target.closest($imac).find('img:last').fadeOut(0).removeClass('hidden').fadeIn('slow');
  }

  var sliderNext = function (){
    $imgs.each(function(i){
      var target = $(this);
      if(!target.hasClass('hidden')){
        target.fadeOut('slow', function(){
          target.addClass('hidden');
          if(i < totalImgs) {
            slideNext(target);
          }else{
            slideFirst(target);
          }
        });
      }
    });
  }

  var sliderPrev = function (){
    $imgs.each(function(i){
      var target = $(this);
      if(!target.hasClass('hidden')){
        target.fadeOut('slow', function(){
          target.addClass('hidden');
          if(!i == 0) {
            slidePrev(target);
          }else{
            slideLast(target);
          }
        });
      }
    });
  }

  var int = setInterval(sliderNext, speed);

  $('.arrow a').click(function(event){
    clearInterval(int);
    setTimeout(function() {
      int = setInterval(sliderNext, speed);
    });
    event.preventDefault();
  });

  $('.arrow .aleft').click(function(){
    sliderNext();
  });

  $('.arrow .aright').click(function(){
    sliderPrev();
  });

});