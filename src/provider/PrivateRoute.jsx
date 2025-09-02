import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  const location = useLocation() // jei jaygay click korse oi jaygar path
  console.log(location)
  if(loading){
    return <Loading></Loading>;
  }
  console.log(user)
  if(user && user?.email){
      return children ; // ei jaygay bhul koirsot
  }
  return <Navigate state={location.pathname} to='/auth/login'></Navigate>
  // return <div>this is privateRoute{children}</div>

  // if-> user thake return children

  // navigate login
}

export default PrivateRoute