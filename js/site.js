$.noConflict();

(function($) {
  $('html').removeClass('no-js').addClass('js');

  $('video').on('click', function() {
    this.paused ? this.play() : this.pause();
  });

  if(responsiveSize('mobile')) {
    var mainImage = document.getElementById('hired');
    var imageArray = ['../media/hired-4-3.jpg',
      '../media/parade-4-3.jpg',
      '../media/hawks-star-cropped-4-3.jpg',
      '../media/k9-4-3.jpg'];
    var imageIndex = 0;

    function changeImage() {
      mainImage.setAttribute('src', imageArray[imageIndex]);
      imageIndex++;
      if(imageIndex >= imageArray.length){
        imageIndex = 0;
      }
    } setInterval(changeImage, 2500);

    var mainImage2 = document.getElementById('pinum');
    var imageArray2 = ['../media/pi-by-numbers-4-3.jpg',
      '../media/irrational-pi-43.jpg',
      '../media/no-place-like-home-4-3.jpg'];
    var imageIndex2 = 0;

    function changeImage2() {
      mainImage2.setAttribute('src', imageArray2[imageIndex2]);
      imageIndex2++;
      if(imageIndex2 >= imageArray2.length){
        imageIndex2 = 0;
      }
    } setInterval(changeImage2, 2500);
  }

  function responsiveSize(target) {
    var size = window
      .getComputedStyle(document.body, ':after')
      .getPropertyValue('content');
    if(size.indexOf(target) === -1) {
      return false;
    } else {
      return true;
    }
  }

})(jQuery);
