var Game = function() {
  'use strict';
  this.frames = [];
};

Game.prototype.rollBall = function() {
  frame = this.frameScore(new Frame());
  return this.frames.push(frame);
};

Game.prototype.frameScore = function(frame) {
  // frame.score[0] ? frame.score[1] = this.randomPoints() : frame.score[0] = this.randomPoints();
  frame.score[0] = this.randomPoints();
  frame.score[1] = this.randomPoints();
  return frame;
};

Game.prototype.randomPoints = function() {
  return Math.floor((Math.random() * 10) + 1);
};
