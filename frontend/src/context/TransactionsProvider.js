import { useEffect, useState } from 'react';
import TransactionsContext from './TransactionsContext';

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
      {children}
    </TransactionsContext.Provider>
  );
}
