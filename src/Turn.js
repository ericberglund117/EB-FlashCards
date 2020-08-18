const util = require('./util.js');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess = () => this.guess;

  returnCard = () => this.card;

  evaluateGuess = () => this.guess === this.card.correctAnswer;

  giveFeedback = () => this.evaluateGuess() ? 'correct!' : 'incorrect!';
};

module.exports = Turn;
