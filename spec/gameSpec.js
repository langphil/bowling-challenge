describe('Game', function() {

  beforeEach( function() {
    game = new Game();
    score = game.frames;
    console.log(score);
  });

  describe('Initialize', function() {

    it('has an empty frame array at game beginning', function() {
      expect(game.frames).toEqual([]);
    });

    it('can create a new frame', function() {
      expect(score).toEqual([]);
    });
  });

  describe('Play', function() {

    it('can roll a bowling ball', function() {
      expect(game.rollBall()).toEqual(game.frames[0]);
    });

    it('can roll a gutter ball', function() {
      game.rollBall();
      game.frames.push((score[0] = 0) + (score[0] = 0));
      expect(game.frames).toEqual([0,0]);
    });
  });
});
