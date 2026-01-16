import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Board from './Board';
import type { Squares } from './types/type';

function App() {
  // X O 번갈아 출력
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // history 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);

  // 이동 변수 관리
  const [currentMove, setCurrentMove] = useState<number>(0);

  // 이전 history 변수
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare: Squares) => {
    const nextHistory: Squares[] = [
      ...history.slice(0, currentMove + 1),
      nextSquare,
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };
  // 지난 플레이를 확인
  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 == 0);
  };

  // 오른쪽에 기록을 보여주기
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to Game Start';
    }
    return (
      <li key={move} className="mt-0.5">
        <button
          onClick={() => jumpTo(move)}
          className="rounded-xs bg-gray-300 p-1 text-black"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <ol>{moves}</ol>
      </div>
    </>
  );
}

export default App;
