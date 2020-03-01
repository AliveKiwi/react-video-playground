import React from 'react';
import './VideoItem.css';
class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          alt={video.snippet.description}
          src={video.snippet.thumbnails.default.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
