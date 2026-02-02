import { connect } from 'react-redux';
import type { RootState } from '../modules';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import Todos from '../component/Todos';
import type { TodoProps } from '../types/type';

// 컨테이너 : 컴퍼넌트와 저장소 연동하는 역할

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  remove,
  toggle,
}: TodoProps) => {
  return (
    <Todos
      input={input}
      todos={todos}
      changeInput={changeInput}
      insert={insert}
      remove={remove}
      toggle={toggle}
    />
  );
};

export default connect(
  ({ todos }: RootState) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  { changeInput, insert, remove, toggle },
)(TodosContainer);
