import React from 'react'
import { Link } from 'react-router-dom'
import arow from '../assets/Hand-drawn arrow@2x.svg'
import store from '../assets/store.svg'


export default function Signup4() {
  return <>

  <div className="row ">
    <div className="col-md-6 mt-5"> 
  
    <div className="container formContainer w-50 m-auto">
    <label className='text-dark' htmlFor="storeNAme">Store name</label>
    <input type="text" className='form-control bg-light mb-2 py-2' placeholder='Type your store name'/>

    <label className='text-dark' htmlFor="storeNAme">Store URl</label>
    <input type="url"  className='form-control mb-2 bg-light py-2' placeholder='My store '/>
   

    <label className='text-dark' htmlFor="storeNAme">Store language</label>
      <input type="text" list='language' name='language'  className='form-control bg-light py-2 mb-2'/>
      <datalist id='language' >
        <option   value="English"></option>
        <option   value="Frace"></option>
        <option   value="Arabic"></option>
        <option   value="Turki"></option>
        <option   value="Italy"></option>
       
      </datalist>
    <label className='text-dark' htmlFor="storeNAme">Store industry</label>
      <input type="text" list='industry' name='industry'  className='form-control bg-light py-2 mb-2'/>
      <datalist id='industry' >
        <option   value="Fashion"></option>
        <option   value="Baby's Fashion"></option>
        <option   value="Women's Fashion"></option>
        <option   value="Boy's Fashion"></option>
        <option   value="Girl's Fashion"></option>
        <option   value="Men's Fashion"></option>
      </datalist>
    <p className='text-muted'> E.X(Baby's,Boys fashion,Girl's fashion,Mens' fashion)</p>

    <Link to="/Finish" className='btn btn-main mt-2 w-50 save'> save</Link>
    <br /><br />
   <Link to="/Signup" className='text-dark' > <i className='fas fa-arrow-left' ></i>  Back to login in</Link>
 </div></div>
    <div className="col-md-6"> <div className="backshow  vh-100">
<div className="content d-flex  ">
  <br />
  <br /><br />
  <br /><br />
<div className="content-header text-white mt-2 mb-0 w-50">
  <img src={store} alt="store" className='store' />
  <h1 >Start turning your ideas into reality</h1>
  <p>Create a free account and get full access to all features for 30-days. No credit card needed. get started in 2 minutes</p>
  <img src={arow} alt="Markaty" className=' markaty-arow mt-0 text-main'/>
</div>
</div>
  </div></div>
  </div>
 

 
  
  </>
}
