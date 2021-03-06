let mole = document.getElementById("mole");
let grid = document.getElementById("grid");
let iteration = 0;
let youScore = document.getElementById("you-score");
let moleScore = document.getElementById("mole-score");
youScore.textContent = parseInt(0);
moleScore.textContent = parseInt(0);
let interval;
let moleClicked = false;
let media = window.matchMedia("(max-width: 600px)");

function mediaQuery(x) {
  if (x.matches) {
    interval = 1000;
  } else {
    interval = 1400;
  }
  return interval;
}

mediaQuery(media);

let random1 = Math.floor(Math.random() * 20);
let random2 = Math.floor(Math.random() * 20);
mole.style.gridArea = `${random1} / ${random2} / ${random1 + 1} / ${
  random2 + 1
}`;

setInterval(function () {
  let random1 = Math.floor(Math.random() * 20);
  let random2 = Math.floor(Math.random() * 20);
  mole.style.gridArea = `${random1} / ${random2} / ${random1 + 1} / ${
    random2 + 1
  }`;
  if (!moleClicked) moleScore.textContent++;
  moleClicked = false;
}, interval);

window.onclick = function (event) {
  if (event.target.matches("#mole")) {
    youScore.textContent++;
  } else {
    moleScore.textContent++;
  }
  moleClicked = true;
};
