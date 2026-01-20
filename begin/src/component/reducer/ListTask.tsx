import { useState } from 'react';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import type { TaskItem, TaskList } from '../types/task';

function TaskItem({ task, onDeleteTask, onChangeTask }: TaskItem) {
  const [isDone, setIsDone] = useState(task.done);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);

  // tasks.done : true => 체크된 체크박스 / false => 체크되지 않은 체크박스
  const CheckboxIcon = isDone
    ? MdOutlineCheckBox
    : MdOutlineCheckBoxOutlineBlank;

  const taskDoneChange = () => {
    setIsDone(!isDone);
    // 기존 done 변경
    onChangeTask({
      ...task,
      done: !isDone,
    });
  };

  const taskTextChange = () => {
    // 기존 text 변경
    onChangeTask({
      ...task,
      text: text,
    });
    // 원래대로 span으로 변경 및 Edit 버튼으로 변경
    setIsEdit(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="mr-2 flex w-full items-center gap-3">
          <CheckboxIcon onClick={taskDoneChange} />
          {isEdit ? (
            <input
              type="text"
              className="border p-3"
              placeholder="할 일을 입력하세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <span className="flex items-center gap-2">{task.text}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {isEdit ? (
            <button
              type="button"
              className="rounded border px-4 py-2 text-sm text-green-600"
              onClick={taskTextChange}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="rounded border px-4 py-2 text-sm text-green-600"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="rounded border px-4 py-2 text-sm text-red-600"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function ListTask({ tasks, onDeleteTask, onChangeTask }: TaskList) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onChangeTask={onChangeTask}
        />
      ))}
    </>
  );
}

export default ListTask;
