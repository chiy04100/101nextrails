import React from 'react';
import Router from 'next/router';

function LoginButton() {
  const handleClick = () => {
    Router.push('/login');
  };

  return (
    <button onClick={handleClick}>Login</button>
  );
}

export default LoginButton;
