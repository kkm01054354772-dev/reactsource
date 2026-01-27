import type { TodosAction } from '../types/type';

// todo 추가, 변경, 삭제
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const DELETE = 'todos/DELELTE';

export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const remove = (id: number) => ({
  type: DELETE,
  id,
});

let id = 3;

const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

export const todos = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case INSERT:
      return {
        ...state,
        input: action.input,
      };
    case TOGGLE:
      return {};
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id);
      };
    default:
      return state;
  }
};
