let mole = document.getElementById("mole");
let iteration = 0;
let youScore = document.getElementById("you-score");
let moleScore = document.getElementById("mole-score");
youScore.innerHTML = parseInt(0);
moleScore.innerHTML = parseInt(0);

let random1 = Math.floor(Math.random() * 50);
let random2 = Math.floor(Math.random() * 50);
mole.style.gridArea = `${random1} / ${random2} / ${random1 + 1} / ${
  random2 + 1
}`;

setInterval(function () {
  let random1 = Math.floor(Math.random() * 50);
  let random2 = Math.floor(Math.random() * 50);
  mole.style.gridArea = `${random1} / ${random2} / ${random1 + 1} / ${
    random2 + 1
  }`;
}, 1400);

window.onclick = function (event) {
  if (event.target.matches("#mole")) {
    youScore.innerHTML++;
  } else {
    moleScore.innerHTML++;
  }
};
