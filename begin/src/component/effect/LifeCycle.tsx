import { useEffect, useState } from 'react';

function LifeCycle() {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    console.log('1. Mounted / 2. Updated');

    return () => console.log('3. Unmounted');
  }, [selected]);

  console.log('--- Rendering ---');
  return (
    <>
      <div className="mx-3 mt-10 flex p-3">
        {['', 'ClassComp', 'FuncComp'].map((option) => (
          <label htmlFor="" className="p-3" key={option}>
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
            />
            {option || 'None'}
          </label>
        ))}
      </div>
    </>
  );
}

export default LifeCycle;
