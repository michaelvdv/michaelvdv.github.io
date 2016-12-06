$(document).ready(function(){
  $('.menu_items').hide();
  $('.text3').hide();
  $('.text4').hide();
//toggle example
  $('#button1').click(function(){
    $('p').toggle('400');
  });

  $('#menu_button').on('click',function(){
    $(this).next().slideToggle('400');
  });

  $("#learn_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#meet").offset().top
    }, 1500);
  });

  $('.images').hover(
    function(){
      $(this).addClass('more_inf');
      $('.text3').fadeIn('250');
  },function(){
      $(this).removeClass('more_inf');
      $('.text3').hide();
  }
);

  $('.images').click(function(){
    $(this).next().slideToggle('400');
    $('.text3').fadeOut('fast');
  });
});
