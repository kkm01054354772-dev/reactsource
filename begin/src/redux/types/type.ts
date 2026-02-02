export type CounterAction =
  | { type: 'counter/INCREASE' }
  | { type: 'counter/DECREASE' };

export type CounterProps = {
  number: number;
  increase: () => void;
  decrease: () => void;
};

export type StateProps = {
  number: number;
};

export type DispatchProps = {
  increase: () => void;
  decrease: () => void;
};

export type Props = StateProps & DispatchProps;

export type TodosAction =
  | { type: 'todos/INSERT'; todo: Todo }
  | { type: 'todos/CHANGE_INPUT'; input: string }
  | { type: 'todos/TOGGLE'; id: number }
  | { type: 'todos/REMOVE'; id: number };

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = {
  input: string;
  todos: Todo[];
};

export type TodoDispatchProps = {
  changeInput: (input: string) => void;
  insert: (input: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
};

export type TodoProps = TodoState & TodoDispatchProps;

export type TodoItemProps = {
  todo: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
};
