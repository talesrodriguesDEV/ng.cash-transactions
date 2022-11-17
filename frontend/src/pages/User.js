import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionsContext from '../context/TransactionsContext';

export default function User() {
  const { globalUsername, setGlobalUsername, setToken } = useContext(TransactionsContext);

  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);

    if (!token) navigate('/');

    fetch('http://localhost:3001/users/balance',
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Token': token,
        },
      })
      .then(response => response.json())
      .then(json => {
        if (json.message) navigate('/');

        localStorage.setItem('username', json.username);

        setGlobalUsername(json.username);
        setBalance(json.account.balance);
      });

  }, []);

  return (
    <div>
      <h1>Hi, {globalUsername}!</h1>
      <h2>{`R$ ${balance.toFixed(2)}`}</h2>
      <button onClick={() => navigate('/make-transaction')}>Efetuar transação</button>
      <button onClick={() => navigate('/transactions-list')}>Consultar transações</button>
      <button>Sair</button>
    </div>
  )
}
