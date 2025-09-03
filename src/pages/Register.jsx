import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
  const {createUser ,setUser , updateUser} = use(AuthContext);
  const [nameErr,setNameerr] = useState();
  const navigate = useNavigate()
  const handleRegister=(e)=>{

    e.preventDefault();
    // console.log(e.target);
    const form = e.target ;
    const name = form.name.value ;
    if(name.length < 5){
      setNameerr('Name should be more than 5 character')
    }else{
      setNameerr('')
    }
    const photo = form.photo.value ;
    const email = form.email.value ;
    const password = form.password.value ;
    // console.log(name , photo , email , password );
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      // console.log(user);
      updateUser({displayName: name , photoURL : photo})
      .then(()=>{
        setUser({...user ,displayName: name , photoURL : photo});
        navigate('/')
      })
      .catch(err=>{
        console.log(err)
      })
      setUser(user)

    })
    .catch(err=>console.log(err))

  }
  return (
  <div className='flex justify-center items-center min-h-screen'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
      <h2 className='font-semibold text-2xl text-center'>Register your acccount</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">name</label>
          <input
           name='name' 
           type="text" 
           className="input"
            placeholder="type your name" 
            required />
          {/* photo url */}
          <label className="label">photo url</label>
          <input name='photo' type="text" className="input" required placeholder="photo url" />
          {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" required placeholder="Email" />                    
          {/* password  */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" required placeholder="Password" />


          {nameErr && <p className='text-red-600 text-xs'>{nameErr}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='text-center text-semibold'>Already have an accout? <Link className='text-secondary' to="/auth/login">Login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>    
  )
}

export default Register