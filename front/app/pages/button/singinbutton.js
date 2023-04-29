import React from 'react';
import Router from 'next/router';

function Singinbutton() {
  const handleClick = () => {
    Router.push('/signin');
  };

  return (
    <button onClick={handleClick}>SignIn</button>
  );
}

export default Singinbutton;
