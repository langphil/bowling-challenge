/* jshint expr: true */

var Game = function() {
  'use strict';
  this.frames = [];
  this.frameCount = 0;
  this._createFrames();
};

Game.prototype._createFrames = function() {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.rollBall = function() {
  i = this.frameCount;
  this.frames[i]._firstRoll ? this.frames[i]._secondRoll = 1 : this.frames[i]._firstRoll = 1;
  if(this.frames[i]._secondRoll) {this.frameCount++};
};

Game.prototype.score = function() {
  scoreTotal = 0;
  this.frames.forEach(function(frame) {
    scoreTotal += frame._firstRoll + frame._secondRoll;
  });
  return scoreTotal;
};
