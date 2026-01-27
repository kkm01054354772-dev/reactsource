import { useEffect } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { UseAuth } from './UseAuth';

function Profile() {
  // const location = useLocation();
  // const { id } = useParams();
  // const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { id } = UseAuth();

  useEffect(() => {
    console.log('Current Path ', location);
  }, [location]);

  return (
    <>
      <h1 className="text-3xl">User - {id}</h1>
      {/* <h1 className="text-3xl">Location - {location.pathname}</h1>
      <h1 className="text-3xl">Location - {location.search}</h1>
      <h1 className="text-3xl">쿼리 스트링 - {searchParams.get('name')}</h1> */}
      <button
        type="button"
        className="rounded bg-orange-500 p-3"
        onClick={() => navigate('/account/logout')}
      >
        로그아웃
      </button>
    </>
  );
}

export default Profile;
