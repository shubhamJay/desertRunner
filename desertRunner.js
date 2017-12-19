const Game = function() {
  this.jumpHeight = 170;
  this.obstacleStep = 10;
  this.score = 0;
};

Game.prototype.countScore = function() {
  return ++this.score;
};

Game.prototype.isGameOver = function(obstacleRight, runnerHeight) {
  return obstacleRight == 1160 && runnerHeight < 170;
};

Game.prototype.moveCactus = function(previousPos) {
  return previousPos + this.obstacleStep;
};

Game.prototype.jumpPlayer = function(previousHeight) {
  return previousHeight + this.jumpHeight;
};

Game.prototype.stopObstacle = function () {
  return 1160;
};

Game.prototype.stopRunner = function () {
  return 0;
};


let game = new Game();

const moveObstacle = function(obstacle) {
  let obstaclePos = +obstacle.style.right.slice(0,-2);
  obstacle.style.right = game.moveCactus(obstaclePos) + "px";
  if (obstaclePos >= 1350) {
    obstacle.style.right = "0px";
  };
};

const jumpPlayer = function(runner,obstacle) {
  let playerHeight = +runner.style.bottom.slice(0, -2);
  let obstaclePos = +obstacle.style.right.slice(0,-2);
  if (event.keyCode == 32 && !game.isGameOver(obstaclePos,playerHeight)) {
    runner.style.bottom = game.jumpPlayer(playerHeight) + "px";
    setTimeout(function() {
      runner.style.bottom = "0px";
    }, 500);
  };
};

const displayScore = function(score) {
  score.innerHTML = game.countScore();
};

const stopObstacle = function(obstacle){
  obstacle.style.right = game.stopObstacle(obstacle) + "px";
};

const finishGame = function(obstacle,runner) {
  let restartButton = document.getElementById("restartButton");
  restartButton.style.visibility = "visible";
  document.getElementById("loosingNote").innerHTML = "opps! You lost";
  stopObstacle(obstacle);
};

const executeGame = function() {
  let obstacle = document.getElementById('obstacle');
  let runner = document.getElementById('runner');
  let score = document.getElementById('score');
  let obstacleRight = +obstacle.style.right.slice(0,-2);
  let runnerHeight = +runner.style.bottom.slice(0,-2);
  moveObstacle(obstacle);
  if (game.isGameOver(obstacleRight,runnerHeight)) {
    finishGame(obstacle,runner);
  } else {
    displayScore(score);
  };
};

const runGame = function() {
  setInterval(executeGame, 50);
};

const restartGame = function(){
  location.reload();
};

const startGame = function() {
  document.getElementById("runner").src = "runnerRunning.gif";
  let startButton = document.getElementById("startButton");
  startButton.style.visibility = "hidden";
  runGame();
  setInterval(runGame, 10000);
};
