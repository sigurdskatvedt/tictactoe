//Reset fungerer ikke
let turnCounter = 1;
const player1 = "Player 1";
const player2 = "Player 2";

const gameboard = (() => {
  const boardArray = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return {
    boardArray,
  };
})();

const player = (name, age) => {
  return { name, age };
};

function boxClick(row, column, element) {
  if (this.player1 == null || this.player2 == null) {
    throw new Error("Please give players a name first.");
  }
  console.log(gameboard.boardArray[row][column]);
  if (gameboard.boardArray[row][column] != null) {
    console.log("Field already filled!");
  } else if (turnCounter % 2 === 1) {
    gameboard.boardArray[row][column] = player1;
    winCheck(this.player1);
    turnCounter++;
    element.childNodes[0].innerHTML = "X";
  } else {
    gameboard.boardArray[row][column] = player2;
    winCheck(this.player2);
    turnCounter++;
    element.childNodes[0].innerHTML = "O";
  }
}

function gameReset() {
  gameboard.boardArray = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  document.getElementById("game-table").childNodes.forEach((value) => {
    console.log(value);
    value.textContent = "";
  });
  document.getElementById("winner-text").textContent = "No one has won yet.";
}

function playerNameChange(currentPlayer) {
  const newName = document.getElementById(currentPlayer.concat("Name")).value;
  if (currentPlayer === "player1") {
    this.player1 = newName;
  } else {
    this.player2 = newName;
  }
}

function winCheck(currentPlayer) {
  for (let i = 0; i < 3; i++) {
    if (
      gameboard.boardArray[i][0] === gameboard.boardArray[i][1] &&
      gameboard.boardArray[i][0] === gameboard.boardArray[i][2] &&
      gameboard.boardArray[i][0] != null
    ) {
      giveWinner(currentPlayer);
    } else if (
      gameboard.boardArray[0][i] === gameboard.boardArray[1][i] &&
      gameboard.boardArray[0][i] === gameboard.boardArray[2][i] &&
      gameboard.boardArray[0][i] != null
    ) {
      giveWinner(currentPlayer);
    }
  }
}

function giveWinner(currentPlayer) {
  console.log(document.getElementById("winner-field").childNodes[0].innerHTML);
  document.getElementById(
    "winner-text"
  ).textContent = `Winner is ${currentPlayer}!`;
}
