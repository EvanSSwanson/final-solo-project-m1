//Initial commit
var loginView = document.querySelector('.login-view')
var homeView = document.querySelector('.home-view')
var fightView = document.querySelector('.fight-view')
var switchButton = document.querySelector('.switch-button')
var nextButton = document.querySelector('.next-button')
var classicContainer = document.querySelector('.classic-container')
var elementalContainer = document.querySelector('.elemental-container')
var fightContainer = document.querySelector('.fight-container')
var classicDiagram = document.querySelectorAll('.classic-diagram')
var elementalDiagram = document.querySelectorAll('.elemental-diagram')
var classicWeapons = document.querySelectorAll('.classic-image')
// 0 = rock, 1 = paper, 2 = scissors
var elementalWeapons = document.querySelectorAll('.elemental-image')
// 0 = fire, 1 = water, 2 = grass, 3 = ice, 4 = stone


var playerOne = new Player('Evan', '🗿')
var playerTwo = new Player('Computer', '🎭')

switchButton.addEventListener('click', switchMode)
nextButton.addEventListener('click', returnHome)
classicWeapons[0].addEventListener('click', selectRock)
classicWeapons[1].addEventListener('click', selectPaper)
classicWeapons[2].addEventListener('click', selectScissors)
elementalWeapons[0].addEventListener('click', selectFire)
elementalWeapons[1].addEventListener('click', selectWater)
elementalWeapons[2].addEventListener('click', selectGrass)
elementalWeapons[3].addEventListener('click', selectIce)
elementalWeapons[4].addEventListener('click', selectStone)

function switchMode() {
  classicContainer.classList.toggle('hidden')
  elementalContainer.classList.toggle('hidden')
  classicDiagram[0].classList.toggle('hidden')
  classicDiagram[1].classList.toggle('hidden')
  elementalDiagram[0].classList.toggle('hidden')
  elementalDiagram[1].classList.toggle('hidden')
}

function returnHome() {
  homeView.classList.toggle('hidden')
  fightView.classList.toggle('hidden')
  switchButton.classList.toggle('hidden')
  nextButton.classList.toggle('hidden')
}

function pickRandom(mode) {
  var newRound = new Game(mode)
  var randomIndex = Math.floor(Math.random() * newRound.weapons)
    if (mode === 'Classic') {
      playerTwo.weapon = classicWeapons[randomIndex].id
    }
    if (mode === 'Elemental') {
      playerTwo.weapon = elementalWeapons[randomIndex].id
    }
    console.log(playerOne)
    console.log(playerTwo)
    var fightHTML = `
    <img class='chosen-image' id='chosen-one' src='./assets/icons8-${playerOne.weapon}.png' alt='${playerOne.weapon} icon'>
    <img class='chosen-image' id='chosen-two' src='./assets/icons8-${playerTwo.weapon}.png' alt='${playerTwo.weapon} icon'>
    `
    fightContainer.innerHTML = fightHTML
    homeView.classList.toggle('hidden')
    fightView.classList.toggle('hidden')
    switchButton.classList.toggle('hidden')
    nextButton.classList.toggle('hidden')
  }

function selectRock() {
  playerOne.weapon = 'rock'
  pickRandom('Classic')
}
function selectPaper() {
  playerOne.weapon = 'paper'
  pickRandom('Classic')
}
function selectScissors() {
  playerOne.weapon = 'scissors'
  pickRandom('Classic')
}
function selectFire() {
  playerOne.weapon = 'fire'
  pickRandom('Elemental')
}
function selectWater() {
  playerOne.weapon = 'water'
  pickRandom('Elemental')
}
function selectGrass() {
  playerOne.weapon = 'grass'
  pickRandom('Elemental')
}
function selectIce() {
  playerOne.weapon = 'ice'
  pickRandom('Elemental')
}
function selectStone() {
  playerOne.weapon = 'stone'
  pickRandom('Elemental')
}
