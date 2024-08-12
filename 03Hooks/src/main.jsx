import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import UseState from './pages/UseState.jsx';
import UseMemo from './pages/UseMemo.jsx';
import UseEffect from './pages/UseEffect.jsx';
import UseRef from './pages/UseRef.jsx';
import UseCallback from './pages/UseCallback.jsx';

createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/usestate" element={<UseState/>} />
        <Route path="/useeffect" element={<UseEffect/>} />
        <Route path="/usememo" element={<UseMemo/>} />
        <Route path="/useref" element={<UseRef/>} />
        <Route path="/usecallback" element={<UseCallback/>} />
      </Routes>
    </Router>

)
