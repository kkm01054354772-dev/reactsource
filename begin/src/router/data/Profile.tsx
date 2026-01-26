import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log('Current Path ', location);
  }, [location]);

  return (
    <>
      <h1 className="text-3xl">User - {id}</h1>
      <h1 className="text-3xl">Location - {location.pathname}</h1>
      <h1 className="text-3xl">Location - {location.search}</h1>
      <h1 className="text-3xl">쿼리 스트링 - {searchParams.get('name')}</h1>
    </>
  );
}

export default Profile;
