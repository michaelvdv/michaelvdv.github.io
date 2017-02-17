$(document).ready(function(){
  $('.menu_items').hide();
  $('.text3').hide();
  $('.text4').hide();

$("#menu_button").on('click', function(){
  $(this).next().slideToggle('400');
});

  $("#mis_but").click(function() {
    var offset = 30;

    $('html, body').animate({
        scrollTop: $("#mission").offset().top - offset
    }, 1000);
});

  $("#team_but").click(function() {
    var offset = 0;

    $('html, body').animate({
        scrollTop: $("#meet").offset().top - offset
      }, 1000);
    });

    $("#project_but").click(function() {
      var offset = 0;

      $('html, body').animate({
          scrollTop: $("#proj").offset().top + offset
      }, 1000);
  });

  $("#learn_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#mission").offset().top
    }, 1500);
  });

  $('.images').hover(
    function(){
      $(this).addClass('more_inf');
      $(this).next().next().fadeIn('250');
  },function(){
      $(this).removeClass('more_inf');
      $(this).next().next().hide();
  }
);

  $('.images').click(function(){
    $(this).next().slideToggle('400');
    $('.text3').fadeOut('fast');
  });
});
