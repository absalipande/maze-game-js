// game button //
const levelUpButton = document.querySelector('.next-level-button');
// game level //
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
// game messages //
const gameLevel = document.querySelector('.game-level');
const levelMessage = document.querySelector('.level-message');
// game ending part //
const scaryPhoto = document.querySelector('.scary-photo');
const screamAudio = document.querySelector('.scream-audio');

const borderCollisionCheck = (value) => {
  if (value === 'maze-border') {
    alert('Oops, you hit the border. Try again');
  }
  if (value === 'finish-level-one') {
    levelUpButton.style.opacity = 1;
    levelUpButton.style.pointerEvents = 'all';
    levelOne.style.pointerEvents = 'none';
  }
  if (value === 'finish-level-two') {
    screamAudio.play();
    scaryPhoto.style.display = 'block';
    document.body.style.background = 'black';
  }
};

window.addEventListener('mousemove', (e) => {
  const mouseCheck = e.target.classList.value;
  borderCollisionCheck(mouseCheck);
});

levelUpButton.addEventListener('click', () => {
  levelOne.style.display = 'none';
  levelTwo.style.display = 'block';
  levelUpButton.style.opacity = 0;
  levelUpButton.style.pointerEvents = 'none';
  gameLevel.textContent = 'Level 2';
  levelMessage.textContent = 'You got this!!';
});
