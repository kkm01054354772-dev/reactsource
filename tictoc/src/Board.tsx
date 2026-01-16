import { useState } from 'react';
import Square from './Square';
import type { BoardProps, Squares } from './types/type';
import { calcWinner } from './utils/util';

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // const initalSquares: Squares = Array(9).fill(null); // [null,null,...,null]
  // const [squares, setSquares] = useState<Squares>(initalSquares);

  // 승자 관리
  const winner = calcWinner(squares);

  let status: string;
  if (winner) {
    status = 'Winner : ' + winner;
  } else {
    status = 'Next player : ' + (xIsNext ? 'X' : 'O');
  }

  const handleClick = (idx: number) => {
    // 이미 클릭된 자리는 클릭 막기
    if (squares[idx]) return;

    // 복제하는 이유 : 기존 값이 있어야 변경여부를 알 수 있기 때문
    // const copySquares = [...squares]
    const copySquares = squares.slice();
    if (xIsNext) {
      copySquares[idx] = 'X';
    } else {
      copySquares[idx] = 'O';
    }
    // setSquares(copySquares);
    // setXIsNext(!xIsNext);
    onPlay(copySquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

export default Board;
