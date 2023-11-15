'use strict';
/** 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '18';
document.querySelector('.score').textContent = '8';
document.querySelector('.highscore').textContent = '16';

document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const secretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  //* Player wins by gussing the right secret number
  else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage('🎉 Correct Number!');
    backgroundColor('rgb(96, 179, 71)');
    secretNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }
  //* When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 1;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game! 😢');
      displayScore(0);
      backgroundColor('#ff4500');
    }
  }

  // //* Player guess is higher than sercret number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game! 😢';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff4500';
  //   }
  // }
  // //* Player guess is lower than secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game! 😢';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff4500';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaySecretNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  backgroundColor('#222');
  secretNumberWidth('15rem');
});
