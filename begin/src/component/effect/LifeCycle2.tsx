import { useEffect, useState } from 'react';

function LifeCycle2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('1. Mounted / 2. Updated');

    return () => console.log('3.Unmounted');
  }, [count1, count2]);

  const handleClick = () => {};

  console.log('--- Rendering ---');

  return (
    <>
      <div className="mx-3 mt-10 flex p-3">
        <h3 className="text-xl">{count1}</h3>
        <button className="border p-2" onClick={() => setCount1(count1 + 1)}>
          Count1++
        </button>
        <h3 className="text-xl">{count2}</h3>
        <button className="border p-2" onClick={() => setCount2(count2 + 1)}>
          Count2++
        </button>
      </div>
    </>
  );
}
export default LifeCycle2;
