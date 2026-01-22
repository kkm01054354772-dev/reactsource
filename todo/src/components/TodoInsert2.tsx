import { useState } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert2 = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  return (
    <form className="flex bg-black">
      <input
        type="checkbox"
        className="mx-2 grow-0 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
      />
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        type="button"
        className="cursor-pointer bg-gray-300 p-2 hover:bg-gray-500"
        onClick={() => {
          onAddTodo(title);
          setTitle('');
        }}
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert2;
