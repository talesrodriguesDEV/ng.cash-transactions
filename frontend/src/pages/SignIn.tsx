import React, { FormEvent, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import nodePort from '../utils/nodePort';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`http://localhost:${nodePort}/users/new`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(json => {
        if (json.message === 'This username already exists') window.alert('Usuário já cadastrado.')
        else if (json.message) window.alert('Cadastro inválido.');
        else navigate('/login');
      });
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-3xl'>Crie agora sua conta!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
        <div className='flex'>
          <label htmlFor='username' className='text-xl mr-6'>Nome:</label>
          <div>
            <input id='username' className='input' type='text' onChange={({ target }) => setUsername(target.value)} />
            <ul className='text-sm mt-2'>
              <li>Mínimo de 3 caracteres</li>
            </ul>
          </div>
        </div>
        <div className='flex'>
          <label htmlFor='password' className='text-xl mr-6'>Senha:</label>
          <div>
            <input id='password' className='input' type='password' onChange={({ target }) => setPassword(target.value)} />
            <ul className='text-sm mt-2'>
              <li>Mínimo de 8 caracteres</li>
              <li>Ao menos 1 letra maiúscula</li>
              <li>Ao menos 1 algarismo</li>
            </ul>
          </div>
        </div>
        <button type='submit' className='btn'>Cadastrar</button>
      </form>
        <Link className='btn' to='/'>Voltar</Link>
    </div>
  )
}
