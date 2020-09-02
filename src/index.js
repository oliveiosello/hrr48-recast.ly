// TODO: Render the `App` component to the DOM
import YOUTUBE_API_KEY from './config/youtube.example.js';
import App from './components/App.js';
ReactDOM.render(
  <App searchYouTube={window.searchYouTube} API_KEY={YOUTUBE_API_KEY} />,
  document.getElementById('app')
);
