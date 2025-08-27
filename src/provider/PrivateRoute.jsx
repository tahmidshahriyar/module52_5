import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  if(loading){
    return <Loading></Loading>;
  }
  console.log(user)
  if(user && user?.email){
      return {children};
  }
  return <Navigate to='/auth/login'></Navigate>
  // return <div>this is privateRoute{children}</div>

  // if-> user thake return children

  // navigate login
}

export default PrivateRoute