$.noConflict();

(function($) {
  $('html').removeClass('no-js').addClass('js');

  $('video').on('click', function() {
    this.paused ? this.play() : this.pause();
  });

  $('#navigation ol').after('<a id="menu" href="#">&#9776;</a>');
  $('#menu').click(function(e) {
    $(this).toggleClass('active');
    $('#navigation ol').toggleClass('active');
    e.preventDefault();
  });

})(jQuery);
