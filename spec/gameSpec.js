describe('Game', function() {

  beforeEach( function() {
    game = new Game();
    score = game.frames;
  });

  describe('Initialize', function() {

    it('has an empty frame array at game start', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('Play', function() {

    it('can roll a bowling ball', function() {
      expect(game.rollBall()).toEqual(1);
    });

    it('can roll a gutter ball', function() {
      game.rollBall();
      game.frames.push((score[0] = 0) + (score[0] = 0));
      expect(game.frames).toEqual([0,0]);
    });

    it('can generate a random score for a roll', function() {
      expect(game.randomPoints()).toBeGreaterThan(0);
      expect(game.randomPoints()).toBeLessThan(11);
    });

    it('can score points when rolled', function() {
      game.rollBall();
      expect(score[0].score[0]).toBeGreaterThan(0);
      expect(score[0].score[0]).toBeLessThan(11);
    });
  });
});
