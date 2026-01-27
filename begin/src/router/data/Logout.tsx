import { useEffect } from 'react';
import { UseAuth } from './UseAuth';
import { useNavigate } from 'react-router-dom';

function Logout() {
  // 로그인 정보 가져오기
  const { logout, id } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      logout();
    }
    // 홈으로 이동 (navigate(경로, {replace?:boolean, state?:any}))
    // 어디로, 어떻게(현재 페이지를 히스토리에 남기지 말기)
    navigate('/', { replace: true });
  }, []);
  return null;
}

export default Logout;
