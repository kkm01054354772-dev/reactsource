import { createBrowserRouter } from 'react-router-dom';
import { novelRouter } from './novelRouter';
import Home from '../components/novels/Home';

// http:localhost:5173/ => Home
// http:localhost:5173/novels/add => Add
// http:localhost:5173/novels/edit/1 => Edit
// http:localhost:5173/novles/1 => Detail

const rootRouter = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/novels',
    children: novelRouter(),
  },
]);

export default rootRouter;
