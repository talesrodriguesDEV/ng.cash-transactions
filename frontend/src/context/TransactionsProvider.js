import { useState } from 'react';
import TransactionsContext from './TransactionsContext';

export default function TransactionsProvider({ children }) {
  const [token, setToken] = useState('');
  const [globalUsername, setGlobalUsername] = useState('');

  const objectValue = {
    token,
    setToken,
    globalUsername,
    setGlobalUsername,
  };

  return (
    <TransactionsContext.Provider value={objectValue}>
      {children}
    </TransactionsContext.Provider>
  );
}
