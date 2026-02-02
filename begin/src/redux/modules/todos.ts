import type { TodosAction } from '../types/type';

// todo 추가, 변경, 삭제
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const remove = (id: number) => ({
  type: REMOVE,
  id,
});

export const toggle = (id: number) => ({ type: TOGGLE, id });
export const changeInput = (input: string) => ({ type: CHANGE_INPUT, input });

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
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};
