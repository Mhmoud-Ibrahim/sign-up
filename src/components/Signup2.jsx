import React from 'react'
import { Link } from 'react-router-dom'
import arow from '../assets/Hand-drawn arrow@2x.svg'
import fram from '../assets/Frame.svg'


export default function Signup2() {

  return <>
  
  <div className="row ">
    <div className="col-md-6 mt-5">
      
      <div className="container w-75 m-auto text-center mt-5">
  <i className="fa-regular fa-envelope mx-2 text-muted"></i>
    <h2>Check your email</h2>
    <p className='text-muted fs-6' >we sent a verification code to  </p>
    <div className='text-muted'> omarmoneer@gmail.com</div>
    <div className='row inputsVerify gx-4 d-flex justify-content-center mt-2 w-100' >
      <input required  className="col-md-2  mx-1 px-0  form-check "></input>
      <input required type='number'  className="col-md-2  mx-1 px-0  form-check "></input>
      <input required  type='number' className="col-md-2  mx-1 px-0  form-check "></input>
      <input required  type='number' className="col-md-2 mx-1  px-0 form-check "></input>
    </div>
<Link to="/signup3" className='btn btn-main mt-2'> Verify email</Link>
   
    <p className='fs-6 '>Don't receive the email? <Link to="/Signup" > <span className='click-to-send fs-6'>Click to ressend</span></Link>  </p>
    <Link to="/Signup" className='text-dark' > <i className='fas fa-arrow-left' ></i>  Back to login in</Link>
  </div></div>
    <div className="col-md-6">  
    <div className="backshow  vh-100">
<div className="content d-flex  ">
  <br />
  <br /><br />
  <br /><br />
<div className="content-header text-white mt-2 mb-0 w-50">
<img src={fram} alt="fram" className='fram' />
  <h1 >Verify your account now</h1>
  <p>Create a free account and get full access to all features for 30-days. No credit card needed. get started in 2 minutes</p>
  <img src={arow} alt="Markaty" className=' markaty-arow mt-0 text-main'/>
</div>
</div>
  </div></div>
  </div>
 
  
  </>
}
