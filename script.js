window.onSpotifyWebPlaybackSDKReady = () => {
  // const play = ({
  //   spotify_uri,
  //   playerInstance: {
  //     _options: {
  //       getOAuthToken
  //     }
  //   }
  // }) => {
  //   getOAuthToken(access_token => {
  //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ uris: [spotify_uri] }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${access_token}`
  //       },
  //     });
  //   });
  // };

  // play({
  //   playerInstance: new Spotify.Player({ name: "..." }),
  //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  // });

  // V1
  const token = 'BQAAOLg7fbT4AAGL7d3UF2Fi4T6nFgWSnP7p3hXyR3bcLijFozjcRV_xItl44pS-y1nWAnqgQfDBxQAP4SPX-1zNVOz2N515CAPzQ5JfQfbahceWKGsJsTQ0UmRxKf046PDtAujh4YKN1IVHUkLEmtDKpNicDimTiFTnOUhFimOUqYLsoIB5wrTkb9snUfBFs1K8';

// V2
  // const player = new Spotify.Player({
  //   name: 'Carly Rae Jepsen Player',
  //   getOAuthToken: callback => {
  //     // Run code to get a fresh access token
  //     //what is this code?

  //     callback('access token here');
  //   },
  //   volume: 0.5
  // });

  //V1
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => { 
      console.error(message);
  });

  player.addListener('authentication_error', ({ message }) => {
      console.error(message);
  });

  player.addListener('account_error', ({ message }) => {
      console.error(message);
  });

  player.connect().then(success => {
    if (success) {
      console.log('The Web Playback SDK successfully connected to Spotify!');
    }
  })

  document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };

  

}