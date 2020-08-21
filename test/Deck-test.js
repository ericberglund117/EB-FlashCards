const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/Data');

describe('Deck', function() {

  let card1;
  let card2;
  let card3;
  let deck;
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
      'Fitzgerald')
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should store information from card objects', () => {
    expect(deck.cards[1].id).to.equal(14);
  });

  it('should tell how many cards are in the deck', () => {
    const amountOfCards = deck.countCards();
    expect(amountOfCards).to.equal(3);
  });

  it('should still know how many cards are in the deck out of the possible amount of cards', () => {
    const data = prototypeData.prototypeData;
    let deck = new Deck(data);
    const amountOfCards = deck.countCards();

    expect(amountOfCards).to.equal(30);
  });

});
