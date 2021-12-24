import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} style={{padding:"10px", border:"none",margin:"auto 10px", background:"#fff",fontSize:"19px",fontWeight:"bold",borderRadius:"15px"}}>
      SIGN-OUT
      </button>
    )
  )
}

export default LoginButton
