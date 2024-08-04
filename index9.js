// Card class Defines a card with a value and suit.
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  
  // Deck class Creates a deck of 52 cards and allows shuffling and dealing.
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push(new Card(value, suit));
        }
      }
    }
  
    shuffle() {
      this.cards.sort(() => Math.random() - 0.5);
    }
  
    deal() {
      return this.cards.pop();
    }
  }
  
  // Player class  Represents a player with a name, hand of cards, and score.
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.shift();
    }
  
    addPoint() {
      this.score++;
    }
  }
  
  // Game logic
  //Creates a deck and shuffles it.
  function game() {
    const deck = new Deck();
    deck.shuffle();
  
    const player1 = new Player('fatima');
    const player2 = new Player('mohamed');
     
    // Deals 26 cards to each player.
    //Iterates through turns, comparing card values and awarding points.
    // Declares the winner based on the final score.
    
    for (let i = 0; i < 26; i++) {
      player1.hand.push(deck.deal());
      player2.hand.push(deck.deal());
    }
  
    while (player1.hand.length > 0 && player2.hand.length > 0) {
      const card1 = player1.playCard();
      const card2 = player2.playCard();
  
      console.log(`Player 1 plays: ${card1.value} of ${card1.suit}`);
      console.log(`Player 2 plays: ${card2.value} of ${card2.suit}`);
  
      if (card1.value > card2.value) {
        player1.addPoint();
        console.log('Player 1 wins this round!');
      } else if (card2.value > card1.value) {
        player2.addPoint();
        console.log('Player 2 wins this round!');
      } else {
        console.log('This round is a tie!');
      }
  
      console.log(`Score: ${player1.name} - ${player1.score}, ${player2.name} - ${player2.score}`);
      console.log('---');
    }
  
    console.log(`Final score: ${player1.name} - ${player1.score}, ${player2.name} - ${player2.score}`);
    if (player1.score > player2.score) {
      console.log(`${player1.name} wins the game!`);
    } else if (player2.score > player1.score) {
      console.log(`${player2.name} wins the game!`);
    } else {
      console.log('The game is a tie!');
    }
  }
  
  // Start the game
  game();
