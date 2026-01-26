import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './router/declarative/Navbar.tsx';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router/data/routes.ts';
import Consumer from './context/Consumer.tsx';

createRoot(document.getElementById('root')!).render(
  // <RouterProvider router={router} />,
  <Consumer />,
);
