const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    turn = new Turn('Im not superstitious, but Im a little stitious');
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store an attempted answer to a question', function() {
    expect(turn.guess).to.equal('Im not superstitious, but Im a little stitious');
  });

  it('should be able to store another guess', function() {
    let turn = new Turn('The worst thing about prison was the dementors.');
    expect(turn.guess).to.equal('The worst thing about prison was the dementors.');
  });

  it('should store a card', function() {
    let turn = new Turn('Michael', card);
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'Who is the Worlds Best Boss?',
      answers: ['Jim', 'Dwight', 'Jan'],
      correctAnswer: 'Michael'
    });
  });

  it('should be able to return the guess', function() {
    let turn = new Turn('Michael', card);
    const makeGuess = turn.returnGuess();

    expect(makeGuess).to.equal('Michael');
  });

  it('should be able to return the card', function() {
    let turn = new Turn('Michael', card);
    const seeCard = turn.returnCard();

    expect(seeCard).to.deep.equal({
      id: 1,
      question: "Who is the Worlds Best Boss?",
      answers: ['Jim', 'Dwight', 'Jan'],
      correctAnswer: "Michael",
    });
  });

  it('should return true if the guess is correct', function() {
    let turn = new Turn('Michael', card);
    const isTrue = turn.evaluateGuess();

    expect(isTrue).to.equal(true);
  });

  it('should return false if the guess is incorrect', function() {
    let turn = new Turn('Jan', card);
    const isTrue = turn.evaluateGuess();

    expect(isTrue).to.equal(false);
  });

  it('should tell you if your guess is correct', function() {
    let turn = new Turn('Michael', card);
    const amICorrect = turn.giveFeedback();

    expect(amICorrect).to.equal('correct!');
  });

  it('should tell you if your guess is incorrect', function() {
    let turn = new Turn('Dwight', card);
    const amICorrect = turn.giveFeedback();

    expect(amICorrect).to.equal('incorrect!');
  });
});
