$(document).ready(function() {

  $('.start-game').click(function() {
    game = new Game();
    $('.start').hide();
    $('.play').show();
  });

    $('#score').text(game.score());
});
