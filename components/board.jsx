var React = require('react');
var Minesweeper = require('./minesweeper_game');
var Tile = require('./tile');

var Board = React.createClass({
  render: function() {
    var updateGame = this.props.updateGame;
    return(
      <div className='grid'>
        {this.props.board.grid.map(function(row, i) {
          return <div className='row'>
            {row.map(function (column, j) {
              return <Tile tile={column} updateGame={updateGame} key={[i,j]}/>;
            })}
          </div>;
        })}
      </div>
    );
  }
});

module.exports = Board;
