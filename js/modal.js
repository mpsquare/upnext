var $btnUpNext = $('.btn-up-next')
var $btnCloseModal = $('.btn-close-modal');
var $body = $('body');
var $modal = $('.modal');

$btnUpNext.click(function () {
  var offset = $(document).scrollTop();
  var viewportHeight = $(window).height();
  $modal.css('top', (offset  + (viewportHeight/2)) - ($modal.outerHeight()/2));
  $modal.show();
  $body.css('overflow','hidden');
});

$btnCloseModal.click(function () {
  $modal.hide();
  $body.css('overflow','visible');
})
