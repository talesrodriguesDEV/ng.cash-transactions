import React, { useEffect, useState, useContext } from 'react'
import TransactionsContext from '../context/TransactionsContext';
import { useNavigate, Link } from 'react-router-dom';


export default function Transaction() {
  const { globalUsername, setGlobalUsername } = useContext(TransactionsContext);

  const [allUsers, setAllUsers] = useState([]);
  const [destinyUser, setDestinyUser] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    if (!localToken) navigate('/');

    if (!globalUsername) {
      const username = localStorage.getItem('username');

      setGlobalUsername(username);
    }

    fetch('http://localhost:3001/users',
    {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(json => setAllUsers(json));
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
        window.alert('Transação efetuada com sucesso!')
      });
  }

  return (
    <div>
      <h1>Boas transações, {globalUsername}!</h1>
      <form onSubmit={makeTransaction}>
        <label>
          Pessoa recebedora:
          <input type='text' onChange={({ target }) => setDestinyUser(target.value)} />
        </label>
        <label>
          Valor:
          <input type='number' step="0.01" min="0.01" onChange={({ target }) => setTransactionValue(target.value)} />
        </label>
        <button type='submit'>Enviar</button>
      </form>
      <Link to='/user'>Voltar</Link>
    </div>
  )
}
