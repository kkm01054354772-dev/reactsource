import { useState } from 'react';
import type { SquareProps } from './types/type';

function Square({ value, handleClick }: SquareProps) {
  //   const [input, setInput] = useState('');

  //   const handleClick = () => setInput('X');

  return (
    <>
      <div>
        <button className="square" onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
}

export default Square;
