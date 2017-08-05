describe('Frame', function() {

  beforeEach( function() {
    frame = new Frame();
  });

  describe('initialize', function() {

    it('has an empty score array at beginning of frame', function() {
      expect(frame.score).toEqual([null, null]);
    });
  });
});
