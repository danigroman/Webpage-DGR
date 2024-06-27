$(function () {

  $('#article1-btn').click(function () {
    $('#article2').hide();
    $('#article1').fadeIn();
  });

  $('#article2-btn').click(function () {
    $('#article1').hide();
    $('#article2').fadeIn();
  });

  $('.article img').click(function () {
    $(this).fadeOut(300, function () {
      $(this).attr('src', 'path/to/another/image.jpg').fadeIn(300);
    });
  });

  $('#article1-btn').mouseover(function () {
    $('#article1').animate({
      left: '+=50px',
      top: '+=20px'
    }, 500);
  });

  $('#article2-btn').mouseover(function () {
    $('#article2').animate({
      left: '+=50px',
      top: '+=20px'
    }, 500);
  });

  $('.wireframe-image').click(function() {
    var imgSrc = $(this).attr('src');
    window.open(imgSrc);
  });
});
