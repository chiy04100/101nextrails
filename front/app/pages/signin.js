import React, { useContext, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { AuthContext } from './authcontext';

function SignIn() {
  const { login } = useContext(AuthContext);
  
  const [familyname, setFamilyname] = useState('');
  const [name, setName] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [address, setAddress] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        user: {
          familyname,
          name,
          postalcode,
          address,
          Phonenumber,
        }
      });
      if (response.status === 201) {
        login(response.data.id, response.data.name);
        Router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="familyname">苗字:</label>
          <input type="text" id="familyname" value={familyname} onChange={(event) => setFamilyname(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="name">名前:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="postalcode">Postal Code:</label>
          <input type="text" id="postalcode" value={postalcode} onChange={(event) => setPostalcode(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Email:</label>
          <input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="Phonenumber">Password:</label>
          <input type="text" id="Phonenumber" value={Phonenumber} onChange={(event) => setPhonenumber(event.target.value)} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
