import Child1 from './Child1';
import { CountProvider } from './CountContext';
function Consumer() {
  return (
    <>
      <CountProvider>
        <h2>Consumer</h2>
        <Child1 />
      </CountProvider>
    </>
  );
}

export default Consumer;
