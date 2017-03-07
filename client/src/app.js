var React = require('react');
var ReactDOM = require('react-dom');

var SongsContainer = require('./containers/SongsContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <SongsContainer />,
    document.getElementById('app')
  );
};
