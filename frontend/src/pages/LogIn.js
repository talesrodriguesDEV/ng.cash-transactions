import React, { useContext, useState } from 'react'
import TransactionsContext from '../context/TransactionsContext';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setToken } = useContext(TransactionsContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then((json) => {
        console.log(json);

        if (json.message) window.alert('Usuário ou senha inválidos.');
        else {
          setToken(json.token);
          localStorage.setItem('token', json.token);
          navigate('/user');
        }
      });
  }

  return (
    <div>
      <h1>Bem-vinda(o) de volta!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' onChange={({ target }) => setUsername(target.value)} />
        </label>
        <label>
          Password:
          <input type='password' onChange={({ target }) => setPassword(target.value)} />
        </label>
        <button type='submit'>Log in!</button>
      </form>
    </div>
  )
}
