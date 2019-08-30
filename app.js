$(function() {
  $('#home-next').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).parent().attr('href')).offset().top}, 800, 'linear');
  });
});