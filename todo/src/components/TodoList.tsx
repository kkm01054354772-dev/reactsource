import type { Todos } from '../types/todo';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDeleteTodo, onChangeTodo }: Todos) => {
  return (
    <div>
      {todos.dtoList.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
