import React from 'react';
import SignUpForm from './customHooks/SignUpForm';
import UserList from './customHooks/UserList';


const UseCustom = () => {
   

    return (
       <div className='min-h-screen bg-amber-700'>
          <SignUpForm/>
          <UserList/>
       </div>
    );
};

export default UseCustom;
