import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {
  const [error,setError] = useState("");
  
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location)
  const handleLogin = (e) =>{
    e.preventDefault()
    const form = e.target ;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      // console.log(user);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(err=>{
      const errcode = err.code ;
      // const errmsg = err.message;
      console.log('error');
      setError(errcode)
    })
  }
  return (
  <div className='flex justify-center items-center min-h-screen'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
      <h2 className='font-semibold text-2xl text-center'>Login your acccount</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" required className="input" placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input name='password' type="password" required className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && <p className='text-red-700 text-xs'>{error}</p>}
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center text-semibold'>dont have an accout? <Link className='text-secondary' to="/auth/register">register</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
  )
}

export default Login