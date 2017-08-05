describe('Frame', function() {

  beforeEach( function() {
    frame = new Frame();
  });

  describe('initialize', function() {

    it('has an empty score array', function() {
      expect(frame.score).toEqual([null, null]);
    });
  });
});
