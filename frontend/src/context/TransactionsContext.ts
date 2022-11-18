import { createContext } from 'react';

export type TransactionsContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const TransactionsContext = createContext<TransactionsContextType | null>(null);

export default TransactionsContext;
