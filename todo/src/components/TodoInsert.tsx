import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <form className="flex bg-black">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
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
