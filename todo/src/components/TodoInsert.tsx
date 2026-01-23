import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import type { TodoUpsert } from '../types/todo';

const TodoInsert = ({
  onAddTodo,
}: {
  onAddTodo: (todo: TodoUpsert) => void;
}) => {
  const [form, setForm] = useState({
    title: '',
    important: false,
    completed: false,
  });

  const { title, important } = form;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev, // 이전 폼
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 부모함수호출
    onAddTodo({
      title: title,
      completed: false,
      important: important,
    });
    // 생성후 폼 클린
    setForm({
      ...form,
      title: '',
      completed: false,
      important: false,
    });
  };

  return (
    <form className="flex bg-black" onSubmit={handleSubmit}>
      <input
        name="important"
        type="checkbox"
        className="mx-2 grow-0 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        checked={important}
      />
      <input
        name="title"
        type="text"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        value={title}
      />
      <button
        type="submit"
        className="cursor-pointer bg-gray-300 p-2 hover:bg-gray-500"
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
