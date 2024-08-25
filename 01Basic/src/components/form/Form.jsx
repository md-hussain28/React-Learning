import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Form = () => {
 

  return (
    <div className='min-h-screen bg-blue-800'>
     <Link to="/form/controlled">
        Controlled and Uncontrolled Components
     </Link>

     </div>
  );
};

export default Form;
