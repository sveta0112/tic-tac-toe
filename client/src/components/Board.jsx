import React from 'react';
import Square from './Square.jsx';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
    };
  }

  handleClick(val) {
    const square = this.state.square.slice();
    squares[value] = 'X';
    this.setState({
      square: square
    });
  }

  renderSquare(val) {
    return (
      <Square
        value={this.state.square[val]}
        onClick={() => this.handleClick(val)}
      />
    );
  }

  render() {
    return (
      <div>
        <div>Next player X</div>
        <div>
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


export default Board;