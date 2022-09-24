//Initial commit
var switchButton = document.querySelector('.switch-button')
var classicContainer = document.querySelector('.classic-container')
var elementalContainer = document.querySelector('.elemental-container')
var classicDiagram = document.querySelector('.classic-diagram')
var elementalDiagram = document.querySelector('.elemental-diagram')

switchButton.addEventListener('click', switchMode)

function switchMode() {
  classicContainer.classList.toggle('hidden')
  elementalContainer.classList.toggle('hidden')
  classicDiagram.classList.toggle('hidden')
  elementalDiagram.classList.toggle('hidden')
}
