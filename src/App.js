import React, { useState, useEffect } from 'react'
import LoginRegister from './components/LoginRegister/LoginRegister';
import Main from './components/Main';
import Header from './components/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState(null);

  function fSetUser(user) {
    setUser(user);
  }

  return (
    <div>
    <Header user={user} fSetUser={fSetUser}/>
    {user ? <Main user={user}/> : <LoginRegister fSetUser={fSetUser}/>}
    </div>
  )
}

export default App;
