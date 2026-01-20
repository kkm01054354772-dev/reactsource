import { useCallback, useState } from 'react';
import Child from './Child';

const style = {
  height: 300,
  backgroundColor: 'lightgray',
};

function Parent() {
  const [count1, setCount1] = useState(0);
  const [active, setActive] = useState(false);

  console.log('parent rendered');

  // 두번째 배열에 포함된 값이 바뀌지 않는 한, props로 전달되는 함수를 재 생성하지 말 것
  const handleClick = useCallback(() => setCount1(count1 + 1), []);

  return (
    <div>
      <h3 className="text-xl">Parent {count1}</h3>
      <button className="border bg-amber-600 p-3" onClick={handleClick}>
        +
      </button>
      <button
        className="border bg-amber-600 p-3"
        onClick={() => setActive(!active)}
      >
        Active 변경
      </button>
      <Child active={active} onClick={handleClick} />
    </div>
  );
}

export default Parent;
