import React, { useState, useEffect } from 'react'
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  function fSetUser(user) {
    setUser(user);
  }

  return (
    <div>
    {user ? <Main user={user}/> : <Login fSetUser={fSetUser}/>}
    </div>
  )
}

export default App;
