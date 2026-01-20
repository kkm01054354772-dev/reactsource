import { useMemo, useState } from 'react';

const heavyCalc = (num) => {
  console.log('Calculating...');

  let result = 0;
  for (let index = 0; index < 10000000000; index++) {
    result += num;
  }
  return result;
};

function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // [count2] 안에 들어있는 값이 변경되는 경우에만 heavyCalc() 실행
  const calculatedValue = useMemo(() => heavyCalc(count2), [count2]);

  return (
    <>
      <div>
        <h3 className="text-xl">Counter1 {count1}</h3>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setCount1(count1 + 1)}
        >
          +
        </button>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setCount1(count1 - 1)}
        >
          -
        </button>
      </div>
      <div>
        <h3 className="text-xl">Counter2 {calculatedValue}</h3>
        <button
          className="border bg-gray-600 p-3"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
        <button
          className="border bg-gray-600 p-3"
          onClick={() => setCount2(count2 - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Memo;
