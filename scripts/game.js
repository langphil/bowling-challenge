var Game = function() {
  'use strict';
  this.frames = [];
};

Game.prototype.newGame = function() {
  frame = new Frame();
  return frame;
};
