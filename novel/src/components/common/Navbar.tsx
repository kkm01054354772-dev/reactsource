import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../reducers/store';
import { logout } from '../../reducers/loginSlice';

const NavBar = () => {
  // 로그인 slice 가져오기
  const authState = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const logoutState = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex h-14 items-center justify-between bg-sky-600 px-5 text-white">
      <div className="text-xl font-bold">Book Manager</div>
      <ul className="m-0 flex list-none gap-4 p-0">
        <li>
          <Link to="/" className="underline-offset-1 hover:underline">
            Home
          </Link>
        </li>
        {authState.email ? (
          <>
            <li>
              <Link
                to="/novels/add"
                className="underline-offset-1 hover:underline"
              >
                Add Book
              </Link>
            </li>
            <li>
              <button
                className="underline-offset-1 hover:underline"
                onClick={logoutState}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/member/login"
              className="underline-offset-1 hover:underline"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
