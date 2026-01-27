export type CounterAction =
  | { type: 'counter/INCREASE' }
  | { type: 'counter/DECREASE' };

export type TodosAction =
  | { type: 'todos/INSERT'; input: string }
  | { type: 'todos/TOGGLE' }
  | { type: 'todos/DELETE' };

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
