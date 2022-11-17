import React, { useEffect, useState, useContext } from 'react'
import TransactionsContext from '../context/TransactionsContext';
import { useNavigate, Link } from 'react-router-dom';
import handleReaload from '../utils/handleReload';

export default function Transaction() {
  const { username, setUsername, balance, setBalance, token, setToken } = useContext(TransactionsContext);

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

  const makeTransaction = (e) => {
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
          destinyAccountId: destiny.accountId,
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
    <div>
      <h1>Boas transações, {username}!</h1>
      <form onSubmit={makeTransaction}>
        <label>
          Pessoa recebedora:
          <input type='text' onChange={({ target }) => setDestinyUser(target.value)} />
        </label>
        <label>
          Valor:
          <input type='number' step="0.01" min="0.01" max={balance} onChange={({ target }) => setTransactionValue(target.value)} />
        </label>
        <button type='submit'>Enviar</button>
      </form>
      <Link to='/user'>Voltar</Link>
    </div>
  )
}
