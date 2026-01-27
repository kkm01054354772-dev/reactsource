import { createContext, useMemo, useState, type ReactNode } from 'react';

// id, password, isLoggedIn, login(), logout()
type AuthContext = {
  id: string;
  password: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
};

type LoginState = {
  id: string;
  password: string;
};

const AuthContext = createContext<AuthContext | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<LoginState>({
    id: '',
    password: '',
  });

  const login = (id: string, password: string) => {
    setAuth({ id, password });
  };
  const logout = () => {
    setAuth({ id: '', password: '' });
  };

  // useMemo(()=>({}),[]) : 첫번째 인자의 함수는 기본적으로 컴퍼넌트가 리로드 될 때마다 새로운 함수로 인식됨
  // [] 안에 들어있는 기준이 되는 값이 변경될 때만 새로운 함수로 인식하도록 함
  const value = useMemo(
    () => ({
      id: auth.id,
      password: auth.password,
      isLoggedIn: auth.id !== '',
      login,
      logout,
    }),
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider, type LoginState };
