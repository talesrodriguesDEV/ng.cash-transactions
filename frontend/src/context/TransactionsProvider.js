import TransactionsContext from './TransactionsContext';

export default function TransactionsProvider({ children }) {
  return (
    <TransactionsContext.Provider>
      {children}
    </TransactionsContext.Provider>
  );
}
