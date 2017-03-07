var React = require('react');

var Song = function(props) {
  return (
    <div>
      <p> {props.songInfo["title"]["label"]} ({props.songInfo["category"]["attributes"]["term"]})</p>
      <img src={props.songInfo["im:image"][0]["label"]}></img>
    </div>
  )
};

module.exports = Song;