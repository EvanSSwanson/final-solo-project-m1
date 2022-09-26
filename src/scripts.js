//Global Variables
var loginView = document.querySelector('.login-view')
var homeView = document.querySelector('.home-view')
var fightView = document.querySelector('.fight-view')
var startButton = document.querySelector('.start-button')
var switchButton = document.querySelector('.switch-button')
var nextButton = document.querySelector('.next-button')
var resetButtons = document.querySelectorAll('.reset-button')
var classicContainer = document.querySelector('.classic-container')
var elementalContainer = document.querySelector('.elemental-container')
var fightContainer = document.querySelector('.fight-container')
var classicDiagram = document.querySelectorAll('.classic-diagram')
var elementalDiagram = document.querySelectorAll('.elemental-diagram')
var classicWeapons = document.querySelectorAll('.classic-image')
var elementalWeapons = document.querySelectorAll('.elemental-image')
var winCounts = document.querySelectorAll('.player-wins')
var game = new Game('Classic')
//Event Listeners
startButton.addEventListener('click', enterHome)
switchButton.addEventListener('click', switchMode)
nextButton.addEventListener('click', returnHome)
for (var i = 0; i < 2; i ++) {
  resetButtons[i].addEventListener('click', resetWinCount)
}
for (var i = 0; i < 3; i ++) {
  classicWeapons[i].addEventListener('click', pickWeapons)
}
for (var i = 0; i < 5; i ++) {
  elementalWeapons[i].addEventListener('click', pickWeapons)
}
//Change-View Functions
function enterHome() {
  startButton.classList.toggle('hidden')
  switchButton.classList.toggle('hidden')
  loginView.classList.toggle('hidden')
  homeView.classList.toggle('hidden')
}

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

function seeResult() {
  homeView.classList.toggle('hidden')
  fightView.classList.toggle('hidden')
  switchButton.classList.toggle('hidden')
  nextButton.classList.toggle('hidden')
}
//Game Interaction-Functions
function resetWinCount() {
  game.resetWins()

  winCounts[0].innerHTML = `Wins: ${game.p1.wins}`
  winCounts[2].innerHTML = `Wins: ${game.p1.wins}`
  winCounts[1].innerHTML = `Wins: ${game.p2.wins}`
  winCounts[3].innerHTML = `Wins: ${game.p2.wins}`
}

function play() {
  game.playRound()

  var fightHTML = `
  <img class='chosen-image' id='chosen-one' src='./assets/icons8-${game.p1.weapon}.png' alt='${game.p1.weapon} icon'>
  <img class='chosen-image' id='chosen-two' src='./assets/icons8-${game.p2.weapon}.png' alt='${game.p2.weapon} icon'>
  `
  fightContainer.innerHTML = fightHTML

  winCounts[0].innerHTML = `Wins: ${game.p1.wins}`
  winCounts[2].innerHTML = `Wins: ${game.p1.wins}`
  winCounts[1].innerHTML = `Wins: ${game.p2.wins}`
  winCounts[3].innerHTML = `Wins: ${game.p2.wins}`

  seeResult()
  }

function pickWeapons() {
  if (event.target.id === 'rock') {
    game.classicDeclare('rock')
  }
  if (event.target.id === 'paper') {
    game.classicDeclare('paper')
  }
  if (event.target.id === 'scissors') {
    game.classicDeclare('scissors')
  }
  if (event.target.id === 'fire') {
    game.elementalDeclare('fire')
  }
  if (event.target.id === 'water') {
    game.elementalDeclare('water')
  }
  if (event.target.id === 'grass') {
    game.elementalDeclare('grass')
  }
  if (event.target.id === 'ice') {
    game.elementalDeclare('ice')
  }
  if (event.target.id === 'stone') {
    game.elementalDeclare('stone')
  }
  play()
}
