const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store an attempted answer to a question', function() {
    const turn = new Turn('Im not superstitious, but Im a little stitious');
    expect(turn.guess).to.equal('Im not superstitious, but Im a little stitious');
  });

  it('should be able to store another guess', function() {
    const turn = new Turn('The worst thing about prison was the dementors.');
    expect(turn.guess).to.equal('The worst thing about prison was the dementors.');
  });

  it('should store a card', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Michael', card);
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'Who is the Worlds Best Boss?',
      answers: ['Jim', 'Dwight', 'Jan'],
      correctAnswer: 'Michael'
    });
  });

  it('should be able to return the guess', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Michael', card);
    const makeAGuess = turn.returnGuess();

    expect(makeAGuess).to.equal('Michael');
  });

  it('should be able to return the card', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Michael', card);
    const seeTheCard = turn.returnCard();

    expect(seeTheCard).to.deep.equal({
      id: 1,
      question: "Who is the Worlds Best Boss?",
      answers: ['Jim', 'Dwight', 'Jan'],
      correctAnswer: "Michael",
    });
  });

  it('should return true if the guess is correct', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Michael', card);
    const isItTrue = turn.evaluateGuess();

    expect(isItTrue).to.equal(true);
  });

  it('should return false if the guess is incorrect', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Jan', card);
    const isItTrue = turn.evaluateGuess();

    expect(isItTrue).to.equal(false);
  });

  it('should tell you if your guess is correct', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Michael', card);
    const amIRight = turn.giveFeedback();

    expect(amIRight).to.equal('correct!');
  });

  it('should tell you if your guess is incorrect', function() {
    const card = new Card(
      1,
      'Who is the Worlds Best Boss?',
      ['Jim', 'Dwight', 'Jan'],
      'Michael');
    const turn = new Turn('Dwight', card);
    const amIRight = turn.giveFeedback();

    expect(amIRight).to.equal('incorrect!');
  });
});
