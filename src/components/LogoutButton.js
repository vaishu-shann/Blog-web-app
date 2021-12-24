import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} style={{padding:"10px", border:"none",margin:"auto 10px", background:"#fff",fontSize:"19px",fontWeight:"bold",borderRadius:"15px"}}>
        sign-out
      </button>
    )
  )
}

export default LogoutButton
