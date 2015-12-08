var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper_game');
var Game = require('./game');

var MinesweeperReact = React.createClass({
  render: function() {
    return(
      <div>
        <Game/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<MinesweeperReact/>, document.getElementById('root'));
});
