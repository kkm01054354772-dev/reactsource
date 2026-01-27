import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Account from './Account';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import NotFound from './NotFound';
import Logout from './Logout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/account',
    Component: Account,
    children: [
      { path: 'login', Component: Login },
      { path: 'logout', Component: Logout },
      { path: 'register', Component: Register },
      { path: 'profile/:id', Component: Profile },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
