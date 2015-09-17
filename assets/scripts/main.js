$(document).ready(function() {
  $('h3').click(function() {
    $('.bottom-level-list').slideUp();
    if (!$(this).next().is(':visible')) {
      $(this).next().slideDown();
    }
  });
});
