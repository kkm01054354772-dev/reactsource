import type { Task } from '../types/task';

type TaskAction =
  | { type: 'ADD'; id: number; text: string; done: boolean }
  | { type: 'CHANGE'; task: Task }
  | { type: 'DELETE'; id: number };

export function taskReducer(tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case 'ADD':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: action.done,
        },
      ];
    case 'CHANGE':
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case 'DELETE':
      return tasks.filter((task) => task.id !== action.id);
    default:
      throw new Error('Unknown action');
  }
}
