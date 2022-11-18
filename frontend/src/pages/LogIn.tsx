import React, { FormEvent, useContext, useState } from 'react'
import TransactionsContext, { TransactionsContextType } from '../context/TransactionsContext';
import { useNavigate, Link } from 'react-router-dom';

export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setToken } = useContext(TransactionsContext) as TransactionsContextType;

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3001/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(json => {

        if (json.message) window.alert('Usuário ou senha inválidos.');
        else {
          setToken(json.token);
          localStorage.setItem('token', json.token);
          navigate('/user');
        }
      });
  }

  return (
    <div className='flex flex-col items-center gap-12'>
      <h1 className='text-3xl'>Bem-vinda(o) de volta!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-14'>
        <div>
          <label className='text-xl mr-6' htmlFor='username'>Nome:</label>
          <input className='input' id='username' type='text' onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          <label className='text-xl mr-6' htmlFor='password'>Senha:</label>
          <input className='input' id='password' type='password' onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button className='btn' type='submit'>Entrar!</button>
      </form>
      <Link className='btn' to='/'>Voltar</Link>
    </div>
  )
}
