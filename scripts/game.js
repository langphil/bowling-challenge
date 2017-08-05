var Game = function() {
  'use strict';
  this.frames = [];
};

Game.prototype.newGame = function() {
  this.rollBall(new Frame());
};

Game.prototype.rollBall = function(frame) {
  this.frames.push(frame);
};
