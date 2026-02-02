import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex h-14 items-center justify-between bg-sky-600 px-5 text-white">
      <div className="text-xl font-bold">Book Manager</div>
      <ul className="m-0 flex list-none gap-4 p-0">
        <li>
          <Link to="/" className="underline-offset-1 hover:underline">
            Home
          </Link>
        </li>
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
            <button className="underline-offset-1 hover:underline">
              Logout
            </button>
          </li>
        </>

        <li>
          <Link
            to="/member/login"
            className="underline-offset-1 hover:underline"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
