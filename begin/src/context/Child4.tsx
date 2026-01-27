import { UseToggle } from './UseToggle';

function Child4() {
  // const context = UseToggle();
  // const { toggle } = context;
  const { toggle } = UseToggle();

  return (
    <>
      <h2>Child4</h2>

      <button className="bg-gray-300 p-3" onClick={toggle}>
        Toggle
      </button>
    </>
  );
}

export default Child4;
