import Hello from '../Hello';

function Wrapper() {
  return (
    <>
      <div className="p-4">
        <Hello />
        <Hello />
      </div>
    </>
  );
}

export default Wrapper;
