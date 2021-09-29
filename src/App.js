import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
  }

  handleGamePlay= (index) => {
    //destructuring
    const {board} = this.state
    this.setState({board: board})
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        {this.state.board.map((value, index) => {
          return (
              <Square
                value={value}
                  index={index}
                  key={index}
                  handleGamePlay={this.handleGamePlay}
                />
            )
        })}
        </div>
      </>
    )
  }
}
export default App
