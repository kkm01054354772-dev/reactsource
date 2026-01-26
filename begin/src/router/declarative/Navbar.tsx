import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

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
        </nav>
        {/* 경로지정  */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          {/* <Route path="/account" Component={Account} >
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
          <Route/> */}
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
