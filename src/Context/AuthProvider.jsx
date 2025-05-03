import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

  const userInfo ={
    email: 'honypay@company.com'
  } 
    
    return (
        <AuthContext value={userInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;