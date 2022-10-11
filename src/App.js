import React, { useState, useEffect } from 'react'
import LoginRegister from './components/LoginRegister';
import Main from './components/Main';
import Logout from './components/Logout';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState(null);

  function fSetUser(user) {
    setUser(user);
  }

  return (
    <div>
    {user ? <Logout user={user} fSetUser={fSetUser}/> : null}
    <h1>Dish list generator</h1>
    {user ? <Main user={user}/> : <LoginRegister fSetUser={fSetUser}/>}
    </div>
  )
}

export default App;
