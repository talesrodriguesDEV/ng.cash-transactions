import './App.css';
import TransactionsProvider from './context/TransactionsProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Transaction from './pages/Transaction';
import TransactionsList from './pages/TransactionsList';

function App() {
  return (
    <TransactionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signin' element={ <SignIn /> } />
          <Route path='/login' element={ <LogIn /> } />
          <Route path='/user' element={ <User /> } />
          <Route path='/make-transaction' element={ <Transaction /> } />
          <Route path='/transactions-list' element={ <TransactionsList /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </TransactionsProvider>
  );
}

export default App;
