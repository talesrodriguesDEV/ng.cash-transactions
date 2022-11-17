import { useEffect, useState } from 'react';
import TransactionsContext from './TransactionsContext';
import logo from '../images/logo.png';

export default function TransactionsProvider({ children }) {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    const localUsername = localStorage.getItem('username');
    setUsername(localUsername);
  }, []);

  const objectValue = {
    token,
    setToken,
    username,
    setUsername,
    balance,
    setBalance,
  };

  return (
    <TransactionsContext.Provider value={objectValue}>
      <div className='bg-black text-white min-h-screen flex flex-col items-center gap-16'>
        <img className='mt-28 ml-6' src={logo} width={300} alt="NG.CASH logo" />
        <div className='w-full'>{children}</div>
      </div>
    </TransactionsContext.Provider>
  );
}
