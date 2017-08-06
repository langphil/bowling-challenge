describe('Frame', function() {

  beforeEach( function() {
    frame = new Frame();
  });

  describe('Initialize', function() {

    it('has an empty frame array at the start', function() {
      expect(frame.score).toEqual([null, null]);
    });
  });
});
