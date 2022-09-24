//Initial commit
var switchButton = document.querySelector('.switch-button')
var classicContainer = document.querySelector('.classic-container')
var elementalContainer = document.querySelector('.elemental-container')
var classicDiagram = document.querySelector('.classic-diagram')
var elementalDiagram = document.querySelector('.elemental-diagram')
var classicWeapons = document.querySelectorAll('.classic-image')
// 0 = rock, 1 = paper, 2 = scissors
var elementalWeapons = document.querySelectorAll('.elemental-image')
// 0 = fire, 1 = water, 2 = grass, 3 = ice, 4 = stone

switchButton.addEventListener('click', switchMode)

function switchMode() {
  classicContainer.classList.toggle('hidden')
  elementalContainer.classList.toggle('hidden')
  classicDiagram.classList.toggle('hidden')
  elementalDiagram.classList.toggle('hidden')
}
