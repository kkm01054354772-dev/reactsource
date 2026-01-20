import { useEffect, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import type { Task } from '../types/task';

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initialTask = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'lennon Wall pic', done: false },
];
let nextId = 3;

function TaskApp() {
  const [tasks, setTasks] = useState(initialTask);

  // 여행계획 추가
  const handleAddTask = (text: string) => {
    // tasks 에 추가
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };
  // 여행계획 수정
  const handleChangeTask = (task: Task) => {
    // 수정할 task 찾기 (덮어쓰기)
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)));
  };
  // useState 확인용 (개발자)
  useEffect(() => {
    console.log('업데이트 된 tasks', tasks);
  }, [tasks]);
  // 여행계획 제거
  const handleDeleteTask = (taskId: number) => {
    // tasks 에서 id에 해당하는 task 제거
    // tasks 에서 id와 일치하지 않는 task 추출해서 새로운 배열 생성 : map(), filter()
    // ... <= 기존 배열이 필요할 때만 사용
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">여행지 계획</h2>
          {/* 데이터 입력 */}
          <AddTask onAddTask={handleAddTask} />
          {/* 리스트 */}
          <ListTask
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeTask}
          />
        </div>
      </div>
    </>
  );
}

export default TaskApp;
