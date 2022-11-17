import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionsContext from '../context/TransactionsContext';
import handleReaload from '../utils/handleReload';

export default function User() {
  const { username, setUsername, balance, setBalance, token, setToken } = useContext(TransactionsContext);

  const navigate = useNavigate();

  useEffect(() => {
    let supplyToken = '';

    if (!token || !username || !balance) {
      const supply = handleReaload(setUsername, setToken, setBalance);
      
      supplyToken = supply.token;
    }

    fetch('http://localhost:3001/users/balance',
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Token': token || supplyToken,
        },
      })
      .then(response => response.json())
      .then(json => {
        if (json.message) navigate('/');

        localStorage.setItem('username', json.username);
        localStorage.setItem('balance', JSON.stringify(json.account.balance));

        setUsername(json.username);
        setBalance(json.account.balance);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    setUsername('');

    navigate('/');
  }

  return (
    <div>
      <h1>Hi, {username}!</h1>
      <h2>{balance && `R$ ${balance.toFixed(2)}`}</h2>
      <button onClick={() => navigate('/make-transaction')}>Efetuar transação</button>
      <button onClick={() => navigate('/transactions-list')}>Consultar transações</button>
      <button onClick={logOut}>Sair</button>
    </div>
  )
}
