const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(function() {
    card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter');
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder');
    card3 = new Card(
      12,
      'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should accept a deck of cards', () => {
    expect(round.deck.cards[1].id).to.equal(14);
  });

  it('should make the first card in the deck the \'currentCard\'', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to return the currentCard', () => {
    const showCurrentCard = round.returnCurrentCard();

    expect(showCurrentCard).to.deep.equal({
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
  });

  it('should instantiate a new turn when a guess is made', () => {
    round.takeTurn('sea otter');

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should be able to keep track of how many turns have been taken', () => {
    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);

    round.takeTurn('gallbladder');

    expect(round.turns).to.equal(2);
  });

  it('should make the next card the currentcard when a turn is taken', () => {
    round.takeTurn('sea otter');

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should be able to evaluate guesses', () => {
    let makeAGuess = round.takeTurn('sea otter');

    expect(makeAGuess).to.equal('correct!');

    makeAGuess = round.takeTurn('Lex');

    expect(makeAGuess).to.equal('incorrect!');
  });

  it('should be able to store incorrect guesses', () => {
    round.takeTurn('Lex');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should be able to calculate the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Lex');

    expect(round.calculatePercentageCorrect()).to.equal(66);
  });
});
