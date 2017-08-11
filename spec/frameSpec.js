describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('initalize', function() {
    it('should have the ability to record two rolls', function() {
      expect(frame).toEqual(jasmine.objectContaining({
        _firstRoll : null,
        _secondRoll : null
      }));
    });
  });
});
