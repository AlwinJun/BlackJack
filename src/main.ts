import './style.css';

// DOM
const startBtn = document.querySelector('.btn-start') as HTMLButtonElement;
const newCardBtn = document.querySelector('.btn-new') as HTMLButtonElement;
const messageEl = document.getElementById('message-el') as HTMLParagraphElement;
const sumEl = document.getElementById('sum-el') as HTMLParagraphElement;
const cardsEl = document.getElementById('cards-el') as HTMLParagraphElement;
const playerInfo = document.querySelector('#player-info') as HTMLParagraphElement;

let arrCard: number[] = [];
let sum: number = 0;
let hasBlackJack: boolean = false;
let isAlive: boolean = false;

interface Player {
  user: string;
  money: number;
}

const player: Player = {
  user: 'Alwin',
  money: 150,
};

playerInfo.textContent = `${player.user} : $${player.money}`;

const getRandomNum = (): number => {
  const number: number = Math.floor(Math.random() * 13 + 1);

  return number > 10 ? 10 : number === 1 ? 11 : number;
};

const startGame = (): void => {
  isAlive = true;
  const [firstCard, secondCard] = [getRandomNum(), getRandomNum()];
  arrCard = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
};

const renderGame = (): void => {
  cardsEl.textContent = `Cards: ${arrCard.join(' ')}`;

  sumEl.textContent = `Sum: ${sum}`;

  switch (true) {
    case sum <= 20:
      messageEl.textContent = 'Do you want to draw a new card?';
      break;
    case sum === 21:
      messageEl.textContent = "You've got Blackjack!";
      hasBlackJack = true;
      isAlive = false; // No need to check if hasBlackJack is true, just assign false directly
      break;
    default:
      messageEl.textContent = "You're out of the game!";
      isAlive = false;
      break;
  }
};

function newCards() {
  if (isAlive === true) {
    let newCard: number = getRandomNum();
    arrCard.push(newCard);
    sum += newCard;

    renderGame();
  }
}

startBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', newCards);

