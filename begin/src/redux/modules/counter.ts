import type { CounterAction } from '../types/type';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initialState = {
  number: 0,
};

export const counter = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
