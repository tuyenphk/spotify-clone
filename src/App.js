import React, {useState, useEffect} from 'react'
import './App.css';
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();
 
function App() {
  const [token, setToken] = useState(null);

  //run code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      //get the user account name
      spotify.getMe().then(user => {
        console.log("😀", user)
      })
    }

    console.log(token)
  }, [])

  return (
    <div className="app">
      {token ? (
        <Player />
      ) : (
        <Login />
      )}

    </div>
  );
}

export default App;
