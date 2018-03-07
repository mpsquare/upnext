var $btnUpNext = $('.btn-up-next')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');
var $body = $('body');

$btnUpNext.click(function () {
  $modal.show();
  $body.css('overflow','hidden');
});

$btnCloseModal.click(function () {
  $modal.hide();
  $body.css('overflow','visible');
})
