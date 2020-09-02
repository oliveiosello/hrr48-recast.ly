// console.log(exampleVideoData);
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      video: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: 'AIzaSyAJu919gM7I-K6iFnJ2yBHFuWbXzzuCZyU',
      query: query
    };

    searchYouTube(options, (videos) => {
      this.setState({
        allVideos: videos,
        video: videos[0]
      })();
    });
  }

  setClick(video) {
    this.setState({
      video: video
    });
  }


  render() {
  // when testing try to stay using
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchInput={this.getYouTubeVideos.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList click={this.setClick.bind(this)} videos={this.state.allVideos}/>
        </div>
      </div>
    </div>);
  }


  // title on click displays video
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
