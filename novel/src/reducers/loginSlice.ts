import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginForm, LoginResponse } from '../types/user';
import { postLogin } from '../apis/userApis';
import { getCookie, removeCookie, setCookie } from '../utils/cookieUtil';

// useState => useContext => react-redux
// store : 상태 데이터 저장소
// reducer : 공유되는 상태 데이터 처리 담당

// slice : reducer + action(리듀서 호출)

// 초기값 설정
const initialState: LoginResponse = {
  email: '',
  nickname: '',
  social: false,
  roles: [],
  accessToken: '',
};

// 비동기 호출
export const loginPostAsync = createAsyncThunk<LoginResponse, LoginForm>(
  'loginPostAsync',
  (param) => {
    return postLogin(param);
  },
);

// 쿠키 값 가져오기
const loadMemberCookie = () => {
  const member = getCookie('member');

  if (!member) return null;
  return member;
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState: loadMemberCookie() || initialState,
  reducers: {
    login: (state, action) => {
      console.log('login');
      // loginParam 가져오기
      const { email, pw } = action.payload;
      state.email = email;
    },
    logout: (state) => {
      console.log('logout');
      //쿠키 지우기
      removeCookie('member');
      state.email = '';
    },
  },
  // 비동기 액션 처리에 대한 상태 관리
  // Promis : fullfilled(성공), pending(대기), rejected(거부)
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log('fulfilled');

        state.email = action.payload.email;
        state.nickname = action.payload.nickname;
        state.social = action.payload.social;
        state.roles = action.payload.roles;
        state.accessToken = action.payload.accessToken;

        if (action.payload.accessToken) {
          setCookie('member', JSON.stringify(action.payload), 1);
        }
      })

      .addCase(loginPostAsync.pending, (state) => {
        console.log('pending');
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

// 외부에서 사용
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
