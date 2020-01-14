import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'

 const Login = () => {
     const [formData,setFormData]=useState({
        
         email:"",
         password:"",
       
     });
const {email,password}=formData

const onSubmit=e=>{
    e.preventDefault();
    console.log('success')
}

const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
    return <Fragment>

<div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4">Login Here</h1>
          <form onSubmit={e=>onSubmit(e)}>
           
            <div className="form-group">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={e=> onChange(e)}
                required
              
                
               
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={e=> onChange(e)}
                required
              />
            </div>

            
            
            <Link to="/register">Don no have Account? Register Here</Link>
            <button className="btn btn-primary my-3 d-block">login</button>
          </form>
        </div>
      </div>

    </Fragment>
}

export default Login