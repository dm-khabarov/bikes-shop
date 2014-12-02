$(document).ready(function(){

  var thumbnails = $('.thumbnails img'),
      slickSlider = $('.slides');

  $('.slides').slick({
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

});