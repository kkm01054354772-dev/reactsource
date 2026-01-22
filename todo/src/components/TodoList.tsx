import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDeleteTodo, onChangeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
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
