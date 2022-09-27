//~~~~~
var loginView = document.querySelector('.login-view');
var homeView = document.querySelector('.home-view');
var fightView = document.querySelector('.fight-view');
var startButton = document.querySelector('.start-button');
var switchButton = document.querySelector('.switch-button');
var nextButton = document.querySelector('.next-button');
var resetButton = document.querySelectorAll('.reset-button');
var classicContainer = document.querySelector('.classic-container');
var elementalContainer = document.querySelector('.elemental-container');
var fightContainer = document.querySelector('.fight-container');
var nameInput = document.getElementById('name-input');
var emojis = document.querySelectorAll('.emoji');
var playerNames = document.querySelectorAll('.player-header');
var classicDiagram = document.querySelectorAll('.classic-diagram');
var elementalDiagram = document.querySelectorAll('.elemental-diagram');
var weaponOptions = document.querySelectorAll('.option-image');
var winCounts = document.querySelectorAll('.player-wins');
var switchOn = new Audio('./assets/Switch_On.mp3');
var switchOff = new Audio('./assets/Switch_Off.mp3');
var vineBoom = new Audio('./assets/Vine_Boom.mp3');
var prettyCool = new Audio('./assets/PrettyCool.mp3');
var prettyCoolShort = new Audio('./assets/PrettyCool_Short.mp3');
var priceIsWrong = new Audio('./assets/Price_is_Wrong.mp3');
var game = new Game();
//~~~~~
startButton.addEventListener('click', checkName);
switchButton.addEventListener('click', switchMode);
nextButton.addEventListener('click', returnHome);
resetButton[0].addEventListener('click', resetWinCount);
resetButton[1].addEventListener('click', resetWinCount);
for (var i = 0; i < 8; i ++) {
  emojis[i].addEventListener('click', selectEmoji);
  weaponOptions[i].addEventListener('click', pickWeapons);
}
//~~~~~
function playAudio() {
  pauseAudio()
  if (game.p1.recentWinner === true && game.p1.wins <= 5) {
    prettyCool.play();
  } else if (game.p1.recentWinner === true && game.p1.wins > 5) {
    prettyCoolShort.play();
    } else if (game.p2.recentWinner === true) {
    priceIsWrong.play();
    } else {
      vineBoom.play();
    }
};

function pauseAudio() {
  prettyCool.pause();
  prettyCoolShort.pause();
  priceIsWrong.pause();
  vineBoom.pause();
  prettyCool.load();
  prettyCoolShort.load();
  priceIsWrong.load();
  vineBoom.load();
};

function enterHome() {
  startButton.classList.toggle('hidden');
  switchButton.classList.toggle('hidden');
  loginView.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
};

function switchMode() {
  var clickCounter = 2;
  classicContainer.classList.toggle('hidden');
  elementalContainer.classList.toggle('hidden');
  classicDiagram[0].classList.toggle('hidden');
  classicDiagram[1].classList.toggle('hidden');
  elementalDiagram[0].classList.toggle('hidden');
  elementalDiagram[1].classList.toggle('hidden');
};

function seeResult() {
  homeView.classList.toggle('hidden');
  fightView.classList.toggle('hidden');
  switchButton.classList.toggle('hidden');
  nextButton.classList.toggle('hidden');
};

function returnHome() {
  homeView.classList.toggle('hidden');
  fightView.classList.toggle('hidden');
  switchButton.classList.toggle('hidden');
  nextButton.classList.toggle('hidden');
};
//~~~~~
function setPlayers() {
  playerNames[0].innerText =`P1: ${game.p1.name} ${game.p1.icon}`;
  playerNames[1].innerText =`P2: ${game.p2.name} ${game.p2.icon}`;
  playerNames[2].innerText =`P1: ${game.p1.name} ${game.p1.icon}`;
  playerNames[3].innerText =`P2: ${game.p2.name} ${game.p2.icon}`;
};

function checkName() {
  game.assignName(nameInput.value);
  setPlayers();
  if ((game.p1.name === "") || (game.p1.icon === undefined)) {
    switchOff.play();
    alert('You must enter a name AND choose an emoji!');
  } else {
    enterHome();
  }
};

function selectEmoji() {
  var selectedEmoji;
  if (event.target.id === 'football') {
    game.assignEmoji('🏈')
  };
  if (event.target.id === 'shamrock') {
    game.assignEmoji('🍀')
  };
  if (event.target.id === 'badger') {
    game.assignEmoji('🦡')
  };
  if (event.target.id === 'cheese') {
    game.assignEmoji('🧀')
  };
  if (event.target.id === 'tiger') {
    game.assignEmoji('🐯')
  };
  if (event.target.id === 'beaver') {
    game.assignEmoji('🦫')
  };
  if (event.target.id === 'gator') {
    game.assignEmoji('🐊')
  };
  if (event.target.id === 'mountain') {
    game.assignEmoji('🏔')
  };
  switchOn.play()
};

function playGame() {
  game.playRound()

  var fightHTML = `
  <img class='chosen-image' id='chosen-one' src='./assets/icons8-${game.p1.weapon}.png' alt='${game.p1.weapon} icon'>
  <h1 class='vs'><em>VS</em></h1>
  <img class='chosen-image' id='chosen-two' src='./assets/icons8-${game.p2.weapon}.png' alt='${game.p2.weapon} icon'>
  `;
  fightContainer.innerHTML = fightHTML;

  winCounts[0].innerHTML = `Wins: ${game.p1.wins}`;
  winCounts[2].innerHTML = `Wins: ${game.p1.wins}`;
  winCounts[1].innerHTML = `Wins: ${game.p2.wins}`;
  winCounts[3].innerHTML = `Wins: ${game.p2.wins}`;

  seeResult();
  playAudio();
};

function pickWeapons() {
  if (event.target.id === 'rock') {
    game.declareWeapons('rock')
  };
  if (event.target.id === 'paper') {
    game.declareWeapons('paper')
  };
  if (event.target.id === 'scissors') {
    game.declareWeapons('scissors')
  };
  if (event.target.id === 'fire') {
    game.declareWeapons('fire')
  };
  if (event.target.id === 'water') {
    game.declareWeapons('water')
  };
  if (event.target.id === 'grass') {
    game.declareWeapons('grass')
  };
  if (event.target.id === 'ice') {
    game.declareWeapons('ice')
  };
  if (event.target.id === 'stone') {
    game.declareWeapons('stone')
  };
  playGame()
  switchOn.play()
};

function resetWinCount() {
  game.resetWins();

  winCounts[0].innerHTML = `Wins: ${game.p1.wins}`;
  winCounts[1].innerHTML = `Wins: ${game.p2.wins}`;
  winCounts[2].innerHTML = `Wins: ${game.p1.wins}`;
  winCounts[3].innerHTML = `Wins: ${game.p2.wins}`;
};
