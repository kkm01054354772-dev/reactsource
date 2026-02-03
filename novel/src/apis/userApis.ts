// 서버와 연동

import axios from 'axios';
import type {
  Novel,
  NovelPut,
  NovelUpSert,
  PageRequestDTO,
} from '../types/book';
import type { LoginForm } from '../types/user';

export const API_SERVER_HOST = 'http://localhost:8080/api/member';

// 로그인 post
export const postLogin = async (loginParam: LoginForm) => {
  const form = new FormData();
  form.append('username', loginParam.email);
  form.append('pw', loginParam.pw);

  const res = await axios.post(`${API_SERVER_HOST}/login`, form, {
    headers: { 'Content-Type': 'x-www-form-urlencoded' },
  });
  console.log('서버 도착 ', res);
  return res.data;
};
