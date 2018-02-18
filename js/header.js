var $btnToggle = $('.btn-toggle');
var $navXS = $('.nav-xs');

$btnToggle.on('click', function () {
  $navXS.toggleClass('js-nav-open');
});
