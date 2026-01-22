import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { initialTodos, type Todo, type TodoCreate } from './types/todo';

function App() {
  const [todos, setTodos] = useState<TodoCreate[]>(initialTodos);
  const nextId = useRef(4);

  // 일정 추가
  const handleAddTodo = (title: string) => {
    // 기존 todos에 추가
    setTodos([
      ...todos,
      {
        id: nextId.current,
        title: title,
        completed: false,
        important: false,
      },
    ]);
    nextId.current += 1;
  };
  // 일정 완료
  const handleChangeTodo = (todo: TodoCreate) => {
    // 전체 todos에서 인자로 넘어온 todo와 일치하는 id를 찾아서 completed 업데이트
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
  };

  // 일정 삭제
  const handleDeleteTodo = (id: number) => {
    // 전체 todos에서 id와 일치하지 않는 todos만 추출
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTeamplate>
        <TodoInsert onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate>
    </>
  );
}

export default App;
