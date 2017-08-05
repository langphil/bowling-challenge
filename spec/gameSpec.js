describe('Game', function() {

  beforeEach( function() {
    game = new Game();
  });

  describe('initialize', function() {

    it('has an empty frame array at game beginning', function() {
      expect(game.frames).toEqual([]);
    });
  });
});
