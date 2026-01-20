import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

const TodoListItem = () => {
  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        <MdCheckBoxOutlineBlank />
        <div className="ml-2">할 일</div>
      </div>
      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
