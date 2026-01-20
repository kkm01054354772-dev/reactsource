import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoTeamplate></TodoTeamplate>
    </>
  );
}

export default App;
