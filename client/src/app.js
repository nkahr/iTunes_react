var React = require('react');
var ReactDOM = require('react-dom');

var SongsContainer = require('./containers/SongsContainer.jsx');

window.onload = function () {
  console.log("test");
  ReactDOM.render(
    <SongsContainer />,
    document.getElementById('app')
  );
};
