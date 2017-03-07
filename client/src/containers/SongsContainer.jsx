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
    // this.getGenres();
  },

  // getGenres: function() {
  //   var url = "https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres";
  //   var request = new XMLHttpRequest();
  //   request.open('get', url);

  //   request.onload = function(){
  //     console.log(request.status);
  //     console.log(request.responseText);
  //     if (request.status !== 200) return;
  //     var data = JSON.parse(request.responseText);
  //     console.log("data", data);
  //     var genreArray = data["34"]["subgenres"];
  //     // console.log(genreArray);
  //     this.setState({genres: genreArray});
  //   }.bind(this);

  //   request.send();
  // },

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
