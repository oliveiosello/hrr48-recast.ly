// console.log(exampleVideoData);
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: exampleVideoData[0]
    };

  }
  setClick(video) {
    this.setState({
      clicked: video
    });
  }
  render() {
  // when testing try to stay using

    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.clicked}/>
        </div>
        <div className="col-md-5">
          <VideoList click={this.setClick.bind(this)} videos={exampleVideoData}/>
        </div>
      </div>
    </div>);
  }


  // title on click displays video
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
