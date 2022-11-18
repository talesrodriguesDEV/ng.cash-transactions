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
          'User-Token': token as string,
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
    <div className='flex flex-col items-center gap-12'>
      <div className='flex justify-around w-full mt-10'>
        <table className='w-1/3'>
          <caption className='text-2xl mb-6'>Transações de débito</caption>
          <thead>
            <tr>
              <th className='w-1/3 border p-2 text-center'>Pessoa recebedora</th>
              <th className='w-1/3 border p-2 text-center'>Valor</th>
              <th className='w-1/3 border p-2 text-center'>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {debitTransactions.map(({ value, createdAt, receiverAccount: { user: { username } } }, index) => {
              const date = new Date(createdAt)

              return (
                <tr key={index}>
                  <td className='w-1/3 border p-2 text-center'>{username}</td>
                  <td className='w-1/3 border p-2 text-center'><span className='text-red-700'>{`R$ ${Number(value).toFixed(2)}`}</span></td>
                  <td className='w-1/3 border p-2 text-center'>{date.toLocaleString('pt-BR')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className='w-1/3'>
          <caption className='text-2xl mb-6'>Transações de crédito</caption>
          <thead>
            <tr>
              <th className='w-1/3 border p-2 text-center'>Pessoa doadora</th>
              <th className='w-1/3 border p-2 text-center'>Valor</th>
              <th className='w-1/3 border p-2 text-center'>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {creditTransactions.map(({ value, createdAt, giverAccount: { user: { username } } }, index) => {
              const date = new Date(createdAt)

              return (
                <tr key={index}>
                  <td className='w-1/3 border p-2 text-center'>{username}</td>
                  <td className='w-1/3 border p-2 text-center'><span className='text-red-700'>{`R$ ${Number(value).toFixed(2)}`}</span></td>
                  <td className='w-1/3 border p-2 text-center'>{date.toLocaleString('pt-BR')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Link className='btn' to='/user'>Voltar</Link>
    </div>
  )
}
