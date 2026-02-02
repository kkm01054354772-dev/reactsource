import type { CounterProps } from '../types/type';

function Counter({ number, increase, decrease }: CounterProps) {
  return (
    <>
      <div className="m-3 grid w-sm grid-cols-2 gap-4">
        <h1 className="col-span-2 text-3xl">{number}</h1>
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
