const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {

  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the currentRound', () => {
    expect(game.currentRound).to.equal(null);
  });

  it.skip('should have a new Round instance after starting the game', () => {

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
