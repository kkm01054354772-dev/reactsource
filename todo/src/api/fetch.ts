// 서버와 통신
import axios from 'axios';
import type { boolParam, Todo, TodoUpsert } from '../types/todo';

export const API_SERVER_HOST = 'http://localhost:8080/todos';

// 전체 todos 조회
// http://localhost:8080/todos?completed=true
// http://localhost:8080/todos?completed=
export const fetchTodos = async (completed: boolParam, page: number) => {
  console.log('넘어온 데이터', completed);
  const res = await axios.get(API_SERVER_HOST, {
    params: {
      completed: completed,
      page: page,
    },
  });
  // axios는 자동으로 json 피싱
  console.log('서버로부터 받은 데이터 ', res.data);
  return res.data;
};

// todo 삭제
export const deleteTodo = async (id: number) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);

  // axios는 자동으로 json 피싱
  console.log('서버로부터 받은 데이터 ', res.data);
  return res.data;
};

// todo 수정
export const updateTodo = async (todo: TodoUpsert) => {
  const res = await axios.put(`${API_SERVER_HOST}/${todo.id}`, todo);

  // axios는 자동으로 json 피싱
  console.log('서버로부터 받은 데이터 ', res.data);
  return res.data;
};

// todo 생성
export const createTodo = async (todo: TodoUpsert) => {
  const res = await axios.post(`${API_SERVER_HOST}/add`, todo);

  // axios는 자동으로 json 피싱
  console.log('서버로부터 받은 데이터 ', res.data);
  return res.data;
};
