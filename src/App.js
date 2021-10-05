import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      history: [],
      xIsNext: true
    }
  }

  handleGamePlay = (index) => {
    // destructuring
    const { board, history, xIsNext } = this.state
    // if(play1 === index){
    //   board[index] = "X"
    //   this.setState({board: board})
    // } else {
    //   // index is the parameter

    let newHistory = this.state.history
    board[index] = this.state.xIsNext ? 'X' : 'O'
    history.push(this.state.xIsNext ? 'x' : 'o')
    //   board[index] = "O"
      this.setState({board: board, history: newHistory, xIsNext: !this.state.xIsNext})

    }


//  // Handle click on boxes on the board.
//      handleBoxClick = (index) => {
//      // get current state of boxes
//      const { board } = this.state.board.slice()

//      // Get current state of history
//      let history = this.state.history

//      // Mark the box either as 'x' or 'o'
//      board[index] = this.state.xIsNext ? 'X' : 'O'

//      // Add move to game history
//      history.push(this.state.xIsNext ? 'X' : 'O')

//      // Update component state with new data
//         this.setState({
//          board:  board,
//          history: history,
//          xIsNext: !this.state.xIsNext
//      })
//  }

//  jumpTo(step) {
//   this.setState({
//     stepNumber: step,
//     xIsNext: (step % 2) === 0
//   });
// }


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
