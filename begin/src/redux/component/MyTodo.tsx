import Counter from './Counter';
import Todos from './Todos';

function MyTodo() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Counter number={0} />
        <hr />
        <Todos />
      </div>
    </>
  );
}

export default MyTodo;
