//Take url to spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";
//Redirect tolocal Url
const redirectUri = "localhost:3000/";
//from Spotify Client id
const clientId = "cff76213089a4e228206c8bf120d67cb";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
