import CounterContainer from '../container/CounterContainer';
import TodosContainer from '../container/TodosContainer';

import Todos from './Todos';

function MyTodo() {
  return (
    <>
      <div className="flex flex-col items-center">
        <CounterContainer />
        <hr />
        <TodosContainer />
      </div>
    </>
  );
}

export default MyTodo;
