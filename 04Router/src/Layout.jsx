import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-fit'>
     <Header/>
      <Outlet/>
     <Footer/>
    </div>
  )
}

export default Layout
