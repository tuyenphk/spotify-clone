import React, {useState, useEffect} from 'react'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import {useStateValue} from './reducer/StateProvider'

const spotify = new SpotifyWebApi();
 
function App() {
  const [{token}, dispatch] = useStateValue();

  //run code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);
      //get the user account name
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch ({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

    }
  }, []);

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
