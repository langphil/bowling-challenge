describe('Game', function() {

  beforeEach( function() {
    game = new Game();
  });

  describe('initialize', function() {

    it('has an empty frame array at game beginning', function() {
      expect(game.frames).toEqual([]);
    });

    it('game can create a new frame', function() {
      game = new Game;
      expect(game.newGame().score).toEqual([null, null]);
    });
  });
});
