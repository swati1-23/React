// custom js SJ

// Main Slider

  (function( $ ) {
    $('.carousel').carousel({
      interval:6000,
      pause: "false"
    }); 
    
    function doAnimations( elems ) {
      var animEndEv = 'webkitAnimationEnd animationend';
      
      elems.each(function () {
        var $this = $(this),
          $animationType = $this.data('animation');
        $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
        });
      });
    }
    
    var $myCarousel = $('.carousel'),
      $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");
    $myCarousel.carousel();
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    //$myCarousel.carousel('pause');
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
      var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
      doAnimations($animatingElems);
    });  
    
  })(jQuery); 


// toggle
$('.toggle-block .title').click(function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});
