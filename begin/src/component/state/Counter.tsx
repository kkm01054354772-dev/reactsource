import { useState } from 'react';
import '../../App.css';

function Counter() {
  // 컴퍼넌트가 기억해야 할 값을 만들고 관리하는 함수
  // 초기값이 0인 상태를 하나 만들고, 그 상태값을 저장하는 변수로 count를 사용, 값 변경 시 setCount 호출
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <>
      <div>
        <h1 className="text-3xl">{count}</h1>
        <button className="bg-orange-500 p-4" onClick={increase}>
          + 1
        </button>
        <button className="bg-red-500 p-4" onClick={decrease}>
          - 1
        </button>
      </div>
    </>
  );
}

export default Counter;
