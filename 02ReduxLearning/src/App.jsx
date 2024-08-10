// App.jsx
import React, { useState } from 'react';
import Sidebar from './pages/SideBar';
import Mainbar from './pages/Mainbar';

const App = () => {
  const [width,setWidth]=useState(200);
  
  return (
    <div className="flex h-screen">
      <Sidebar w={width}/>
      <Mainbar />
    </div>
  );
};

export default App;
