import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users/new',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);

        if (json.message === 'This username already exists') window.alert('Usuário já cadastrado.')
        else if (json.message) window.alert('Cadastro inválido.');
        else navigate('/login');
      });
  }

  return (
    <div>
      <h1>Crie agora sua conta NG.CASH!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type='text' onChange={({ target }) => setUsername(target.value)} />
          <small>
            <ul>
              <li>Mínimo de 3 caracteres</li>
            </ul>
          </small>
        </label>
        <label>
          Senha:
          <input type='password' onChange={({ target }) => setPassword(target.value)} />
          <small>
            <ul>
              <li>Mínimo de 8 caracteres</li>
              <li>1 letra maiúscula</li>
              <li>1 algarismo</li>
            </ul>
          </small>
        </label>
        <button type='submit'>Finalizar cadastro!</button>
      </form>
    </div>
  )
}
