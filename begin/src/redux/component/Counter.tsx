function Counter({ number }) {
  return (
    <>
      <div className="m-3 grid w-sm grid-cols-2 gap-4">
        <h1 className="col-span-2 text-3xl"></h1>
        <button className="bg-orange-500 p-4">+ 1</button>
        <button className="bg-red-500 p-4">- 1</button>
      </div>
    </>
  );
}

export default Counter;
