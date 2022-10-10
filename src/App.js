import React, { useState, useEffect } from 'react'
import Login from './components/Login';
import Main from './components/Main';

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function login() {
    setUserLoggedIn(true);
  }

  return (
    <div>
    {userLoggedIn ? <Main/> : <Login login={login}/>}
    </div>
  )
}

export default App;
