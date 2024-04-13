import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentSquare) {
    let cpySquare = [...square];
    if (checkWinner(cpySquare) || cpySquare[getCurrentSquare]) return;
    cpySquare[getCurrentSquare] = turn ? "X" : "O";
    setTurn(!turn);
    setSquare(cpySquare);
  }

  function checkWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleClickRestart() {
    setTurn(true);
    setSquare(Array(9).fill(''));
  }

  useEffect(() => {
    if (
      !checkWinner(square) &&
      square.every((squareItem) => squareItem !== "")
    ) {
      setStatus("Deu Empate!");
    } else if (checkWinner(square)) {
      setStatus(`O vencedor foi: ${checkWinner(square)}`);
    } else {
        setStatus(`O próximo jogador é ${turn ? 'X' : 'O'}`)
    }
  }, [square, turn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleClickRestart}>Reinicie o Jogo</button>
    </div>
  );
}
