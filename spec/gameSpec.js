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
      spyOn(Math, "random").and.returnValue(0.5);
      game.rollBall();
      expect(game.frames[0]._firstRoll).toEqual(6);
    });

    it('can add up the total score', function() {
      spyOn(Math, "random").and.returnValue(0.5);
      for(var i = 0; i < 5; i++) { game.rollBall(); }
      expect(game.score()).toEqual(30);
    });

    it('can return an integer between 0 and 10', function() {
      expect(game.randomHit()).toEqual(jasmine.any(Number));
    });
  });
});
