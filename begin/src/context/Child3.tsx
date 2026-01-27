import Child4 from './Child4';
import { UseToggle } from './UseToggle';

function Child3() {
  // const context = UseToggle();
  // const { isOn } = context;
  const { isOn } = UseToggle();

  return (
    <>
      <h2>Child3</h2>
      <p>Toggle {isOn ? 'On' : 'Off'}</p>
      <Child4 />
    </>
  );
}

export default Child3;
