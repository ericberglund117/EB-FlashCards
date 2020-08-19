const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentTurn = null;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => this.deck.cards[this.turns];
}

module.exports = Round;
