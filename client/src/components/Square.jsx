import React from 'react';

class Square extends React.Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <button onClick={() => this.props.onClick()} >
        {this.props.value}
      </button>
    );
  }
}

export default Square;