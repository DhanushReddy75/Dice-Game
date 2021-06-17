'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
const count0El = document.getElementById('count--1');
const win=document.getElementById('won');
const lost=document.getElementById('lose');
//const pop=document.querySelector('content');
//const btnhold=document.querySelector("hold-btn");
//const btncontinue=document.querySelector("continue-btn");
//const btncontinue=document.querySelector('.btn--continue');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const modal = document.querySelector('.modal');
const btnok = document.querySelector('.ok-btn');
const btncancel = document.querySelector('.cancel-btn');

let scores, count,currentScore, playing,change,rcount;

// Starting conditions
const init = function () {
  scores =0;
  count=1;
  rcount=25;
  win.classList.add('hidden');
  lost.classList.add('hidden');
  currentScore = 0;
  playing = true;
  count0El.textContent=rcount;
  score0El.textContent = 0;
  current0El.textContent = 0;
  modal.classList.add('hidden');
  diceEl.classList.add('hidden');
};
init();
/*function myFunction() {
  if (confirm("Half your score will be lost")) {
    change=true;
  } else {
    change=false;
  }
}*/

function rollcount(){
    rcount= rcount-1;
    document.getElementById('count--1').textContent=rcount;
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {

  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;
    
    // 3. Check for rolled 1
    if (dice !== 1) {
       
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--0`
      ).textContent = currentScore;
      rollcount();
    } else {
      if(count>0){
        /*myFunction();
        if(change){
          scores+=Math.trunc(currentScore/2);
          document.getElementById(`score--0`).textContent =scores;
          document.getElementById(`current--0`).textContent = 0;
            currentScore = 0;
            rollcount();
            count--;
        }
        else{
            document.getElementById(`current--0`).textContent = 0;
            currentScore = 0;
        }*/
        modal.classList.remove('hidden');
        btnok.addEventListener('click',function(){
          modal.classList.add('hidden');
          scores+=Math.trunc(currentScore/2);
          document.getElementById(`score--0`).textContent =scores;
          document.getElementById(`current--0`).textContent = 0;
            currentScore = 0;
            rollcount();
            count--;
        });
        btncancel.addEventListener('click',function(){
          modal.classList.add('hidden');
          document.getElementById(`current--0`).textContent = 0;
            currentScore = 0;
        });
      }
      else{
        document.getElementById(`current--0`).textContent = 0;
        currentScore = 0;
      }
    }
    if(rcount==0){
        document.getElementById('count--1').textContent=rcount;
        //window.alert("You lost");
        diceEl.classList.add('hidden');
        lost.classList.remove('hidden');
        playing=false;
    }
  }
});
btnHold.addEventListener('click', function () {
   rollcount();
  if (playing) {
    // 1. Add current score to active player's score
    scores+= currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--0`).textContent =
      scores;

    // 2. Check if player's score is >= 100
    if (scores>= 100 ) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      if(rcount==0){
        //window.alert("You won");
        win.classList.remove('hidden');
    }
      document
        .querySelector(`.player--0`)
        .classList.add('player--winner');
    } else {
      // Switch to the next player
      document.getElementById(`current--0`).textContent = 0;
  currentScore = 0;
    }
    if(rcount==0){
      document.getElementById('count--1').textContent=rcount;
      //window.alert("You lost");
      diceEl.classList.add('hidden');
      lost.classList.remove('hidden');
      playing=false;
  }
  }
});

btnNew.addEventListener('click', init);
