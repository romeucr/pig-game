'use strict'

// Selecting elements
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1
  diceEl.classList.remove('hidden')
  diceEl.src = `./img/dice-${dice}.png`

  if (dice !== 1) {
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore
  } else {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    player0EL.classList.toggle('player--active')
    player1EL.classList.toggle('player--active')
  }
})
