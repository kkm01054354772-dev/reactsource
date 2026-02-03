import { createSlice } from '@reduxjs/toolkit';
import type { LoginResponse } from '../types/user';

// useState => useContext => react-redux
// store : 상태 데이터 저장소
// reducer : 공유되는 상태 데이터 처리 담당

// slice : reducer + action(리듀서 호출)

const initialState: LoginResponse = {
  email: '',
  nickname: '',
  social: false,
  roles: [],
  accessToken: '',
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log('login');
      // loginParam 가져오기
      const { email, pw } = action.payload;
      state.email = email;
    },
    logout: (state) => {
      console.log('logout');
      state.email = '';
    },
  },
});

// 외부에서 사용
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
