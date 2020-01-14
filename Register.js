import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'

 const Register = () => {
     const [formData,setFormData]=useState({
         name:"",
         email:"",
         password:"",
         password2:""
     });
const {name,email,password,password2}=formData

const onSubmit=e=>{
    e.preventDefault();
   if(password !== password2){
        console.log('password do not match')
    }else{
        console.log(formData)
    }
}

const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
    return <Fragment>

<div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4">Register Here</h1>
          <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name"> Name: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e=> onChange(e)}
                required
              />
        
            </div>
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

            <div className="form-group">
              <label htmlFor="password2"> Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                name="password2"
                value={password2}
                onChange={e=> onChange(e)}
                required
              />
            </div>
            
            <Link to="/login">Already Have Account? Login Here</Link>
            <button className="btn btn-primary my-3 d-block">Register</button>
          </form>
        </div>
      </div>

    </Fragment>
}

export default Register