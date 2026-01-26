import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="bg-gray-200">
        <nav className="flex h-20 items-center p-3">
          {/* aTag (X) Link (O) */}
          <Link to={'/'} className="basis-3xs">
            HOME
          </Link>
          <Link to={'/about'} className="basis-3xs">
            ABOUT
          </Link>
          <Link to={'/contact'} className="basis-3xs">
            CONTACT
          </Link>
          <Link to={'/account'} className="basis-3xs">
            ACCOUNT
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
