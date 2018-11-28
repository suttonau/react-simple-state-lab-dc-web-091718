import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    //set initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: props.value
    };
  }

  handleClick = (event) => {
    this.setState({color: '#333'})
  }

  render() {
    return (
      <div className='cell'
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick} />
    )
  }
}

export default Cell;
//Find out what feature you want to work on, what is the state of that feature, how do i get component attrs (props), how to i change the state (callback funcs)
