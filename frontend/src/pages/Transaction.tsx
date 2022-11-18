import React, { useEffect, useState, useContext, FormEvent } from 'react'
import TransactionsContext, { TransactionsContextType } from '../context/TransactionsContext';
import { useNavigate, Link } from 'react-router-dom';
import handleReaload from '../utils/handleReload';

export default function Transaction() {
  const { username, setUsername, balance, setBalance, token, setToken } = useContext(TransactionsContext) as TransactionsContextType;

  const [allUsers, setAllUsers] = useState([]);
  const [destinyUser, setDestinyUser] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !username || !balance) handleReaload(setUsername, setToken, setBalance);

    fetch('http://localhost:3001/users',
      {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(json => setAllUsers(json));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeTransaction = (e: FormEvent) => {
    e.preventDefault();

    const destiny = allUsers.find(({ username }) => username === destinyUser);

    if (!destiny) {
      window.alert('Essa pessoa não está cadastrada.');
      return;
    };

    fetch('http://localhost:3001/users/transaction',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Token': token,
        },
        body: JSON.stringify({
          destinyAccountId: destiny['accountId'],
          value: transactionValue,
        }),
      })
      .then(response => response.json())
      .then(json => {
        if (json.message) {
          window.alert('Pessoa usuária não autorizada.');

          navigate('/');
        }

        window.alert('Transação efetuada com sucesso!')
      });
  }

  return (
    <div className='flex flex-col items-center gap-20'>
      <h1 className='text-3xl'>Boas transações, {username}!</h1>
      <form onSubmit={makeTransaction} className='flex flex-col gap-10'>
        <div className='w-full flex justify-around'>
          <label className='text-xl mr-10'>Pessoa recebedora:</label>
          <input className='input' type='text' onChange={({ target }) => setDestinyUser(target.value)} />
        </div>
        <div className='w-full flex justify-around'>
          <label className='text-xl mr-10'>Valor da transação:</label>
          <input className='input' type='number' step="0.01" min="0.01" max={balance} onChange={({ target }) => setTransactionValue(Number(target.value))} />
        </div>
        <button className='btn' type='submit'>Enviar</button>
      </form>
      <Link className='btn' to='/user'>Voltar</Link>
    </div>
  )
}
