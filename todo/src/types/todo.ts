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

// create 용(직접)
export type TodoCreate = Omit<Todo, 'createDate' | 'updateDate'>;

// 서버 연동 데이터 타입 설정 ***********************************************
// 입력 / 수정
export type TodoUpsert = Omit<Todo, 'id' | 'createDate' | 'updateDate'> & {
  id?: number;
};

// 삭제 : id(number)
// 조회 (서버로부터 넘어오는 데이터 담기) : Todo 타입과 동일

// 조회요청시 parameter 타입
export type boolParam = '' | 'true' | 'false';
export function toCompleteQuery(completed: boolParam): boolParam {
  return completed ? 'true' : 'false';
}
// TodoList 사용할 props 타입
export type Todos = {
  todos: PageResult<Todo>;
  onDeleteTodo: (id: number) => void;
  onChangeTodo: (todo: TodoUpsert) => void;
};
export type Todoitems = Omit<Todos, 'todos'> & { todo: Todo };

// 페이지 나누기 타입
// 서버 : PageResultDTO
export type PageRequestDTO = {
  page: number;
  size: number;
};

export type PageResult<T> = {
  dtoList: T[];
  pageNumList: number[];
  pageRequestDTO: PageRequestDTO;
  prev: boolean;
  next: boolean;
  prevPage: number;
  nextPage: number;
  totalPage: number;
  current: number;
  totalCount: number;
};
