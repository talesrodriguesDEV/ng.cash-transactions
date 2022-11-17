const handleReaload = (setUsername, setToken, setBalance) => {
  const localUsername = localStorage.getItem('username');
  setUsername(localUsername);

  const localToken = localStorage.getItem('token');
  setToken(localToken);

  const localBalance = JSON.parse(localStorage.getItem('balance'));
  setBalance(localBalance);

  return { username: localUsername, token: localToken, balance: localBalance };
}

export default handleReaload;
