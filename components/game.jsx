var React = require('react');
var Minesweeper = require('./minesweeper_game');
var Board = require('./board');

var Game = React.createClass({
  getInitialState: function() {
    return({board: new Minesweeper.Board(10, 10)});
  },
  updateGame: function() {

  },
  render: function() {
    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
});

module.exports = Game;
