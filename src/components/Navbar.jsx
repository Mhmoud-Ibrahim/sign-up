import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar() {
  return <>
  
  <nav className='navbar py-0 px-3 d-flex justify-content-lg-start w-50  fixed-top'>
  <img src={logo} alt="Markaty" className='bg-transparent text-main'/>
  </nav>
  </>
}
