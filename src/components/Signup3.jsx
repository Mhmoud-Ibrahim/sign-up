import React from 'react'
import { Link } from 'react-router-dom'
import arow from '../assets/Hand-drawn arrow@2x.svg'
import fram from '../assets/Frame.svg'


export default function Signup3() {



  return <>

<div className="row mx-0 ">
  <div className="col-md-6 mt-5">
    
    <div className=" w-75 m-auto text-center   mt-5">
  <i className="fas fa-check-circle  mx-2 fa-2x text-success"></i>
    <h2 className='text-success'>Email verified</h2>
    <p className='text-muted fs-6' >Your account has been verified successfully  </p>
    <div className='text-muted'> Click blow to setup your store</div>
   

<Link to="/signup4" className='btn btn-main mt-2' >Continue</Link>
<br /><br />
    <Link to="/Signup" className='text-dark' > <i className='fas fa-arrow-left' ></i>  Back to login in</Link>
  </div></div>
  <div className="col-md-6 p-0"><div className="backshow p-0 vh-100">
<div className="content d-flex  ">
  <br />
  <br /><br />
  <br /><br />
<div className="content-header text-white mt-2 mb-0  w-50">
  <img src={fram} alt="fram" className='fram' />
  <h1 >Start turning your ideas into reality</h1>
  <p>Create a free account and get full access to all features for 30-days. No credit card needed. get started in 2 minutes</p>
  <img src={arow} alt="Markaty" className=' markaty-arow mt-0 text-main'/>
</div>
</div>
  </div></div>
</div>

  </>
  
  
}
