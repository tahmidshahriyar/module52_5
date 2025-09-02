import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import button from "daisyui/components/button";
const Navbar = () => {
  const {user, LogOut} = use(AuthContext);
  const handleLogOut=() =>{
    LogOut().then(()=>alert('you are logged out'))
    .catch(err => console.log(err))

    console.log('use trying to logout')
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        {
          user ?  <button onClick={handleLogOut} className="btn btn-primary px-10 " >Logout</button> : <Link to="/auth/login" className="btn btn-primary px-10 " >Login</Link>
        }
        
        
      </div>
    </div>
  );
};

export default Navbar;
