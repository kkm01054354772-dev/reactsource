import { useState } from 'react';
import MyButton from './MyButton';
// 2개의 버튼 다른 스타일 지정 후 자식에게 전달

export default function MyBtn() {
  const btn1 = {
    padding: '16px',
    background: 'red',
  };
  const btn2 = {
    padding: '16px',
    background: 'gray',
  };
  // 버튼 카운트 관리
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <>
      <div className="m-5">
        <h1 className="text-3xl">Counters that update separately</h1>
        <MyButton style={btn1} count={count} onClick={onClick} />
        <MyButton style={btn2} count={count} onClick={onClick} />
      </div>
    </>
  );
}
