var React = require('react');
var SongsList = require('../components/SongsList.jsx');

var SongsContainer = React.createClass({

  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('get', url);

    request.onload = function(){
      if (request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      var songsArray = data["feed"]["entry"];
      this.setState({songs: songsArray});
    }.bind(this);

    request.send();
  },

  getInitialState: function () {
    return { songs: [], genres: []};
  },

  render: function () {
    return (
      <div>
        <SongsList songs={this.state.songs} />
      </div>
    )
  }
});

module.exports = SongsContainer;
