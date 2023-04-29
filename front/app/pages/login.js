import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { AuthContext } from './authcontext';

function Login() {
  const { login } = useContext(AuthContext);

  const [address, setAddress] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/logins?address=${address}&Phonenumber=${Phonenumber}`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError(true);
      });
  }, [address, Phonenumber]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (users.length === 1) {
      login(users[0].id, users[0].name);
      Router.push('/');
    } else if (users.length === 0) {
      setErrorMessage('User not found');
    } else {
      setErrorMessage('Multiple users found');
      console.log(users);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Email:</label>
          <input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="Phonenumber">Password:</label>
          <input type="text" id="Phonenumber" value={Phonenumber} onChange={(event) => setPhonenumber(event.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
