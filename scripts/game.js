/* jshint expr: true */

var Game = function() {
  'use strict';
  this.frames = [];
  this.frameCount = 0;
  this._setFrames();
};

Game.prototype._setFrames = function() {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.rollBall = function() {
  i = this.frameCount;
  this.frames[i]._firstRoll ? this.frames[i]._secondRoll = this.randomHit() : this.frames[i]._firstRoll = this.randomHit();
  if(this.frames[i]._secondRoll) {this.frameCount++};
};

Game.prototype.score = function() {
  scoreTotal = 0;
  this.frames.forEach(function(frame) {
    scoreTotal += frame._firstRoll + frame._secondRoll;
  });
  return scoreTotal;
};

Game.prototype.randomHit = function() {
  return Math.floor((Math.random() * 10) + 1);
};
