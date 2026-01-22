export const initialTodos = [
  {
    id: 1,
    title: 'react 기초 알아보기',
    completed: true,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 2,
    title: '컴퍼넌트 스타일링 공부',
    completed: false,
    important: false,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 3,
    title: '일정관리 앱 작성',
    completed: false,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
];

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  createDate: Date;
  updateDate: Date;
};

// create 용
export type TodoCreate = Omit<Todo, 'createDate' | 'updateDate'>;
