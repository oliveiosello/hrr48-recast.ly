// TODO: Render the `App` component to the DOM
import YOUTUBE_API_KEY from './config/youtube.example.js';
import searchYouTube from './lib/searchYouTube.js';
import App from './components/App.js';
ReactDOM.render(
  <App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY} />,
  document.getElementById('app')
);
