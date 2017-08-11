var Frame = function() {
  this._firstRoll = null;
  this._secondRoll = null;
};

Frame.prototype._firstRoll = function() {
  return this._firstRoll;
};

Frame.prototype._secondRoll = function() {
  return this._firstRoll;
};
