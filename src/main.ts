import './style.css';
let arrCard = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

//Generate whole random number from 1-10
function getRandomNum() {
  let number = Math.floor(Math.random() * 13 + 1);

  if (number > 10) {
    //return 10 if number value is 11,12,13
    return 10;
  } else if (number === 1) {
    //retrn 11 if number is equal to 1
    return 11;
  } else {
    return number;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomNum();
  let secondCard = getRandomNum();
  arrCard = [firstCard, secondCard];
  sum = firstCard + secondCard;

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
    //Prevent user from getting new cards
    if (hasBlackJack === true) {
      isAlive = false;
    }
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCards() {
  //if player starts and still in game rin function
  if (isAlive === true) {
    let newCard = getRandomNum();
    arrCard.push(newCard);
    sum += newCard;

    //console.log(arrCard);
    renderGame();
  }
}

const playerInfo = document.querySelector('#player-info');
const player = {
  user: 'Alwin',
  money: 150,
};

playerInfo.textContent = `${player.user} : $${player.money}`;

