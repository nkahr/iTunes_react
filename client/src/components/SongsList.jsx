var React = require('react');
var Song = require('./Song.jsx');

var SongsList = function(props) {
  var songNodes = props.songs.map(function(song, index) {
    return <Song songInfo={song} key={index} />
  });

  return (
    <div>
      {songNodes}
    </div> 
  )
}

module.exports = SongsList;