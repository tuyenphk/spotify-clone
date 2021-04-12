import React, {useState, useEffect} from 'react'
import './App.css';
import Login from './components/Login/Login'
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  //run code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log(token)
  }, [])

  return (
    <div className="app">
      {token ? (
        <h1>I am Logged in</h1>
      ) : (
        <Login />
      )}

    </div>
  );
}

export default App;
