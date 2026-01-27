import Child1 from './Child1';
import Child3 from './Child3';
import { CountProvider } from './CountContext';
import { ToggleProvider } from './ToggleContext';
function Consumer() {
  return (
    <>
      <CountProvider>
        <h2>Consumer</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <Child3 />
      </ToggleProvider>
    </>
  );
}

export default Consumer;
