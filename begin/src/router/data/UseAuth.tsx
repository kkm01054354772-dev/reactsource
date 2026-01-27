import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function UseAuth() {
  // 상태를 보관하고 있는 context 가져오기
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider null');
  }

  return context;
}
