import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
<<<<<<< HEAD
    this.props.handleGamePlay()
=======
    this.props.handleGamePlay(this.props.index)
>>>>>>> 0b7695793bf223f0918f3bdfe471fc63924b60c6
  }

  render(){
    return(
      <>
      <div className="square" onClick={this.handleClick}>
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Square
