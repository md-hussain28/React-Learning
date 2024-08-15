import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Accordion from './components/accordion/Accordion';
import ImageSlider from './components/imageslider/ImageSlider';
import RandomColour from './components/randomcolour/RandomColour';
import Rating from './components/rating/Rating';
import LoadMore from './components/loadmore/LoadMore';
import TreeView from './components/treeview/TreeView';
import Theme from './components/theme/Theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/randomcolor" element={<RandomColour />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/loadmore" element={<LoadMore />} />
        <Route path="/treeview" element={<TreeView />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
