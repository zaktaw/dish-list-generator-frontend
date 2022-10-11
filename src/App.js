import React, { useState, useEffect } from 'react'
import Login from './components/Login';
import Main from './components/Main';
import './App.css';
import Logout from './components/Logout';

function App() {

  const [user, setUser] = useState(null);

  function fSetUser(user) {
    setUser(user);
  }

  return (
    <div>
    {user ? <Logout user={user} fSetUser={fSetUser}/> : null}
    <h1>Dish list generator</h1>
    {user ? <Main user={user}/> : <Login fSetUser={fSetUser}/>}
    </div>
  )
}

export default App;
