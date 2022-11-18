import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionsContext, { TransactionsContextType } from '../context/TransactionsContext';
import handleReaload from '../utils/handleReload';
import nodePort from '../utils/nodePort';

export default function User() {
  const { username, setUsername, balance, setBalance, token, setToken } = useContext(TransactionsContext) as TransactionsContextType;

  const navigate = useNavigate();

  useEffect(() => {
    let supplyToken = '';

    if (!token || !username || !balance) {
      const supply = handleReaload(setUsername, setToken, setBalance);

      supplyToken = supply.token as string;
    }

    fetch(`http://localhost:${nodePort}/users/balance`,
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
    <div className='flex flex-col items-center gap-28'>
      <div className='flex flex-col gap-8 items-center mt-8'>
        <h1 className='text-5xl'>Oi, {username}!</h1>
        {balance && <h2 className='text-xl'>Você tem <span className='text-red-700'>{`R$ ${balance.toFixed(2)}`}</span></h2>}
      </div>
      <div className='flex gap-16'>
        <button className='btn' onClick={() => navigate('/make-transaction')}>Efetuar transação</button>
        <button className='btn' onClick={() => navigate('/transactions-list')}>Consultar transações</button>
        <button className='btn' onClick={logOut}>Sair</button>
      </div>
    </div>
  )
}
