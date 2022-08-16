import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../Context/Authcontext';

const PrivateRouts = ({children}) => {

   
  const {isAuth} = useContext(Authcontext);
  if (isAuth === false) {
      return <Navigate to="/Login" />;
  } else {
    return children;
  }

}

export default PrivateRouts;