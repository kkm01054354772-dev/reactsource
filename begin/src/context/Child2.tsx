import { useContext } from 'react';
import { CountContext } from './CountContext';

function Child2() {
  // 상태를 보관하고 있는 context 가져오기
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('CountProvider null');
  }

  const { count, setCount } = context;

  return (
    <>
      <h2>Child2</h2>
      <p>Count - {count}</p>
      <button className="bg-gray-300 p-3" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Child2;
