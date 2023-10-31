
import arow from '../assets/Hand-drawn arrow@2x.svg'
import star from '../assets/Stars.svg'
import {useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import *as Yup from 'yup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'






export default function Signup() {



  let navigate = useNavigate()
function sendregistertoapi(){
navigate('/Signup2')

}
  let validationSchema =Yup.object({
    name:Yup.string().required('name is required').min(4,'name canot less than 4 digits'),
    email:Yup.string().required('email is required').email().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'email invalid EX: nnn50@gamil.com'),
    password:Yup.string().required('password is required').matches(/^[a-zA-Z0-9]{4,10}$/),
    phone:Yup.string().required('phone is required').matches(/^(002){0,1}01[0125][0-9]{8}$/,'invalid number')})
    
    let formik = useFormik({
      initialValues:{
        name:'',
        email:'',
        password:'',
        phone:''
      },
     validationSchema 
      ,onSubmit:sendregistertoapi
    })
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_zt0e4ri', 'template_508kk3g', form.current, 'ww2PjfkDBA7HQFJuX')
        .then((result) => {
            toast.success(`Check your Email please`,
            {duration:2000,className:'text-center border border-success px-4 mt-2'});
            navigate('/Signup2')
        }, (error) => {
            console.log(error.text);
        });
    };
    
      
  return <>
 

  <div className="row">
    <div className="col-md-6 mt-5">
 
      <div className="container ">
 <div className='formContainer w-50  mt-4 m-auto' >
 <form ref={form}  onSubmit={formik.handleSubmit&&sendEmail} >
<label htmlFor="name">Name: </label>
<input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" value={formik.values.name} name="name" id='name' className='form-control bg-light mb-2 py-2' placeholder='Enter Your Name'/>
{formik.errors.name&&formik.touched.name?     <div className='alert alert-danger mt-2'>{formik.errors.name}</div>:null}

<label htmlFor="email">Email </label>
<input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" value={formik.values.email} name="email" id='email' className='form-control bg-light mb-2 py-2' placeholder='Enter Your Email'/>
{formik.errors.email&&formik.touched.email?     <div className='alert alert-danger mt-2'>{formik.errors.email}</div>:null}

<label htmlFor="phone">Phone Number </label>
<input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" value={formik.values.phone} name="phone" id='phone' className='form-control bg-light mb-2 py-2' placeholder='(100)123-34567'/>
{formik.errors.phone&&formik.touched.phone?<div className='alert alert-danger mt-2'>{formik.errors.phone}</div>:null}

<label htmlFor="password">password: </label>
<input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" value={formik.values.password} name="password" id='password' className='form-control bg-light mb-2 py-2' placeholder='Create a Password'/>
<p className='text-muted .h6'>must be at least 8 charates</p>
{formik.errors.password&&formik.touched.password?     <div className='alert alert-danger mt-2'>{formik.errors.password}</div>:null}


<button  type='submit' className='btn  btn-main w-100  mb-1 '>Get started</button>

</form>
 </div>
  </div></div>
    <div className="col-md-6"> <div className="backshow  vh-100">
<div className="content d-flex  ">
  <br />
  <br /><br />
  <br /><br />
<div className="content-header text-white mt-2 mb-0 w-50">
  <img src={star} alt="star" className='star' />
  <h1 >Start turning your ideas into reality</h1>
  <p>Create a free account and get full access to all features for 30-days. No credit card needed. get started in 2 minutes</p>
  <img src={arow} alt="Markaty" className=' markaty-arow mt-0 img-fluid text-main'/>
</div>
</div>
  </div></div>
  </div>

  </>
}
