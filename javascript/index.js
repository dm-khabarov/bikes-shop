$(document).ready(function(){

  var thumbnails = $('.thumbnails img'),
      slickSlider = $('.slides');

  slickSlider.slick({
    autoplay: true,
    arrows: false,
    onAfterChange: function() {
      var idx = slickSlider.slickCurrentSlide();
      thumbnails.eq( idx ).css('border-color', '#a1877f');
    },
    onBeforeChange: function() {
      var idx = slickSlider.slickCurrentSlide();
      thumbnails.eq( idx ).css('border-color', '#fff');
    }
  });

  thumbnails.each(function( idx ) {
    $( this ).click( function(){
      slickSlider.slickGoTo( idx );
    })
  });

  thumbnails.eq( slickSlider.slickCurrentSlide() ).css('border-color', '#a1877f');



  // Orders Slider

  var oSlider = $('.orders-slider ul'),
      nextBtn = $('.nextBtn');

  oSlider.slick({
    autoplay: true,
    infinite: true,
    slide: 'li',
    slidesToShow: 3,
    variableWidth: true
  });

  var dur = 300; // animate() duration

  nextBtn.hover(function() {
    nextBtn.animate({
      right: ['+=7']
    }, dur);
    nextBtn.children( "div" ).animate({
      opacity: [1]
    }, dur)
  },
  function() {
    nextBtn.animate({
      right: ['-=7']
    }, dur);
    nextBtn.children( "div" ).animate({
      opacity: [0.57]
    }, dur)
  });

  nextBtn.click(function() {
    oSlider.slickNext();
  });

});