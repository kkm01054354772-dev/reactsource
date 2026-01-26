import { createBrowserRouter } from 'react-router-dom';
import productRouter from './productRouter';
import memberRouter from './memberRouter';

const rootRouter = createBrowserRouter([
  // {
  //     path:"/products",
  //     Component: Products,
  //     children:productRouter(),
  // }
  // {
  //     path:"/member",
  //     Component: Member,
  //     children:memberRouter(),
  // }
]);
