let firstCard = getRandomNum();
let secondCard = getRandomNum();
let arrCard = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

//Generate whole random number from 1-10
function getRandomNum() {
  let number = Math.floor(Math.random() * 10 + 1);
  return number;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';

  // Render out 2 cards & 3rd card if the user draw another card
  for (let i = 0; i < arrCard.length; i++) {
    cardsEl.textContent += arrCard[i] + ' ';
  }

  //Render out ALL the cards we have
  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;

    // if (isAlive == false) {
    //   cardsEl.textContent = null;
    //   sumEl.textContent = ' ';
    //   sum = 0;
    // }
  }
  messageEl.textContent = message;
}

function newCard() {
  let thirdCard = getRandomNum();
  arrCard.push(thirdCard);
  sum += thirdCard;

  //console.log(arrCard);
  renderGame();
}
