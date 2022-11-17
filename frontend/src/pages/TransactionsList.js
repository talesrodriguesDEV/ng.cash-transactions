import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function TransactionsList() {
  const [debitTransactions, setDebitTransactions] = useState([]);
  const [creditTransactions, setCreditTransactions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) navigate('/');

    fetch('http://localhost:3001/users/transactions-list',
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Token': token,
        },
      })
      .then(response => response.json())
      .then(json => {
        setDebitTransactions(json.debitTransactions);
        setCreditTransactions(json.creditTransactions);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <table>
        <caption>Transações de débito</caption>
        <thead>
          <tr>
            <th>Pessoa recebedora</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {debitTransactions.map(({ value, createdAt, receiverAccount: { user: { username } } }, index) => {
            const date = new Date(createdAt)

            return (
              <tr key={index}>
                <td>{username}</td>
                <td>{`R$ ${value.toFixed(2)}`}</td>
                <td>{date.toLocaleString('pt-BR')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <caption>Transações de crédito</caption>
        <thead>
          <tr>
            <th>Pessoa doadora</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {creditTransactions.map(({ value, createdAt, giverAccount: { user: { username } } }, index) => {
            const date = new Date(createdAt)

            return (
              <tr key={index}>
                <td>{username}</td>
                <td>{`R$ ${value.toFixed(2)}`}</td>
                <td>{date.toLocaleString('pt-BR')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to='/user'>Voltar</Link>
    </div>
  )
}
