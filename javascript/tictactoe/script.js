const Gameboard = (() => {

  let gameboard = ["", "", "", "", "", "", "", "", ""];

  let renderGameboard = () => {
    let boardSection = document.getElementById('gameboard-section');
    for (let i = 0; i < 9; i++) {
      let square = document.createElement('div');
      square.setAttribute('id', `square-${i}`);
      square.setAttribute('class', 'square')
      square.setAttribute('style', 'border: 1px black solid');
      boardSection.appendChild(square);
    }
    for (let i = 0; i < 9; i++) {
      let square = document.getElementById(`square-${i}`);
      square.textContent = gameboard[i];
    }
  }

  return {
    renderGameboard,
    gameboard,
  }

})();

const Game = (() => {

  let winner;
  let turn = 1;

  let gameOver = (board) => {

    if ((!winner) && (board.every((e) => e !== ""))) {
      winner = "draw";
      return winner;
    };

    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] !== "") {
        winner = board[i];
        return winner;
      };
    };
    for (let i = 0; i <= 2; i++) {
      if (board[i] === board[i+3] && board[i] === board[i+6] && board[i] !== "") {
        winner = board[i];
        return winner;
      };
    };
    if ((board[0] === board[4] && board[0] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6])) {
          winner = board[4];
        };


    return winner;
  }


  let startGame = () => {

    let player1 = Player('elias', 'X');
    let player2 = Player('tomas', 'O');

    let over = false;

      if (turn === 1) {
        for (let i = 0; i < 9; i++) {
          let square = document.getElementById(`square-${i}`);
          square.addEventListener('click', () => {player1.markSpot(i)});
        }
        turn = 2;
        over = gameOver(Gameboard.gameboard);
      }
      else if (turn === 2) {
        for (let i = 0; i < 9; i++) {
          let square = document.getElementById(`square-${i}`);
          square.addEventListener('click', () => {player2.markSpot(i)});
          break;
        }
        turn = 1;
        over = gameOver(Gameboard.gameboard);
      }



    

  }

  return {
    startGame,
    gameOver,
  }

})();

const Player = (name, mark) => {

  let markSpot = (i) => {
    Gameboard.gameboard[i] = mark;
    console.log(`spot checked: ${i}`);
    console.log(Gameboard.gameboard);
    return Gameboard.gameboard[i];
  }


  return {
    markSpot,
    name,
    mark,

  }

}

Gameboard.renderGameboard();
Game.startGame();