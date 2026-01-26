import { Link, useNavigate } from 'react-router-dom';
import BasicLayout from './BasicLayout';

function Home() {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <div className="px-3">
        <h1 className="mt-3 text-3xl">HOME</h1>
        <p>이곳은 HOME 입니다.</p>
      </div>
      {/* 고정된 네비게이션 */}
      <Link to={'/about'} className="basis-3xs">
        ABOUT
      </Link>
      <button
        type="button"
        className="cursor-pointer border bg-amber-400 p-3"
        onClick={() => navigate('/contact')}
      >
        CONTACT
      </button>
    </BasicLayout>
  );
}

export default Home;
