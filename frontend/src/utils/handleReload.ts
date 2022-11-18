const handleReaload = (setUsername: Function, setToken: Function, setBalance: Function) => {
  const localUsername = localStorage.getItem('username');
  setUsername(localUsername);

  const localToken = localStorage.getItem('token');
  setToken(localToken);

  const localBalance = Number(localStorage.getItem('balance'));
  setBalance(localBalance);

  return { username: localUsername, token: localToken, balance: localBalance };
}

export default handleReaload;
