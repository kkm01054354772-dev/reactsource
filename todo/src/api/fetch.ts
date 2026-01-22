// 서버와 통신
import axios from 'axios';
import type { boolParam } from '../types/todo';

export const API_SERVER_HOST = 'http://localhost:8080/todos';

// 전체 todos 조회
// http://localhost:8080/todos?completed=true
// http://localhost:8080/todos?completed=
export const fetchTodos = async (completed: boolParam) => {
  console.log('넘어온 데이터', completed);
  const res = await axios.get(API_SERVER_HOST, {
    params: {
      completed: completed,
    },
  });
  // axios는 자동으로 json 피싱
  console.log('서버로부터 받은 데이터 ', res.data);
  return res.data;
};
