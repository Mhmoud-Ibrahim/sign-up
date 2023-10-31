import React from 'react'
import { Link } from 'react-router-dom'

export default function Finish() {
  return <>
<div className="container mt-5 vh-100 w-100 justify-content-center align-items-center">
  <div className=" d-flex flex-column align-items-center"><h1 className='text-success text-center fs-1'>You are authuried</h1>
  <i className='fas fa-check-circle text-success fa-3x ' ></i>
 <Link className='btn btn-main mt-3 w-50'  to="/signup" >Home</Link></div>
</div>
  
  </>
}
