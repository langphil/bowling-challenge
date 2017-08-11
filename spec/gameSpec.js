describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize', function() {
    it('has an intial array of 10 frames', function() {
      expect(game.frames.length).toEqual(10);
    });

    it('has an initial roll count of 0', function() {
      expect(game.frameCount).toEqual(0);
    });
  });

  describe('play', function() {
    it('can add points when rolled', function() {
      game.rollBall();
      spyOn(Frame.prototype, "_firstRoll").and.returnValue(1);
      expect(game.frames[0]._firstRoll).toEqual(1);
    });
  });
});
