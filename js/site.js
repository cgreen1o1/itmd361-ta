$.noConflict();

(function($) {
  $('html').removeClass('no-js').addClass('js');

  $('video').on('click', function() {
    this.paused ? this.play() : this.pause();
  });

})(jQuery);
