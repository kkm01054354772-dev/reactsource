import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Book from './component/Book.tsx';
import MyApp from './component/MyApp.tsx';
import Parent from './component/props/Parent.tsx';
import CardApp from './component/props/CardApp.tsx';
import Products from './component/props/Products.tsx';
import ParentCardLayout from './component/children/ParentCardLayout.tsx';
import Counter from './component/state/Counter.tsx';
import InputSample from './component/state/InputSample.tsx';
import InputMultiSample from './component/state/InputMultiSample.tsx';
import InputMultiSample2 from './component/state/InputMultiSample2.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Book /> */}
    {/* <MyApp /> */}
    {/* <Parent /> */}
    {/* <CardApp /> */}
    {/* <Products /> */}
    {/* <ParentCardLayout /> */}
    {/* <Counter /> */}
    {/* <InputSample /> */}
    <InputMultiSample2 />
  </StrictMode>,
);
