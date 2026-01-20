export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskList = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onChangeTask: (task: Task) => void;
};
// 기존 선언된 타입에서 제외한(Omit) 타입 선언
export type TaskItem = Omit<TaskList, 'tasks'> & {
  task: Task;
};
