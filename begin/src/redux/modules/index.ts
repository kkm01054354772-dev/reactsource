import { combineReducers } from '@reduxjs/toolkit';
import { todos } from './todos';
import { counter } from './counter';

// 리듀서 결합
const rootReducer = combineReducers({
  counter,
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
