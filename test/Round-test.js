const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  const card1 = new Card(
    1,
    'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'],
    'sea otter');
  const card2 = new Card(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder');
  const card3 = new Card(
    12,
    'What is Travis\'s middle name?',
    ['Lex', 'William', 'Fitzgerald'],
    'Fitzgerald');

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take in a deck of cards', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards[1].id).to.equal(14);
  });

  it('should make the first card in the deck the \'currentCard\'', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });
  
});
