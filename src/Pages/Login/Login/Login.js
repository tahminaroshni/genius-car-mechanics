import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { setUser, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(result => {
        setUser(result.user);
        navigate(location.state?.from);
      })
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-warning">Google Sign In</button>
    </div>
  );
};

export default Login;