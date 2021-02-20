import React, { Component } from 'react'
// import { Board } from './components/Board'
// import { Cell } from './components/Cell'

export class App extends React.Component {
  state = {
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    // state: 'new',
    // mines: 10,
  }
  render() {
    return (
      <div>
        <header>
          <h1>Mine Sweeper</h1>
        </header>
        <section>
          <ul>
            <li>{this.state.board[0][0]}</li>
            <li>{this.state.board[0][1]}</li>
            <li>{this.state.board[0][2]}</li>
            <li>{this.state.board[0][3]}</li>
            <li>{this.state.board[0][4]}</li>
            <li>{this.state.board[0][5]}</li>
            <li>{this.state.board[0][6]}</li>
            <li>{this.state.board[0][7]}</li>
            <li>{this.state.board[1][0]}</li>
            <li>{this.state.board[1][1]}</li>
            <li>{this.state.board[1][2]}</li>
            <li>{this.state.board[1][3]}</li>
            <li>{this.state.board[1][4]}</li>
            <li>{this.state.board[1][5]}</li>
            <li>{this.state.board[1][6]}</li>
            <li>{this.state.board[1][7]}</li>
            <li>{this.state.board[2][0]}</li>
            <li>{this.state.board[2][1]}</li>
            <li>{this.state.board[2][2]}</li>
            <li>{this.state.board[2][3]}</li>
            <li>{this.state.board[2][4]}</li>
            <li>{this.state.board[2][5]}</li>
            <li>{this.state.board[2][6]}</li>
            <li>{this.state.board[2][7]}</li>
            <li>{this.state.board[3][0]}</li>
            <li>{this.state.board[3][1]}</li>
            <li>{this.state.board[3][2]}</li>
            <li>{this.state.board[3][3]}</li>
            <li>{this.state.board[3][4]}</li>
            <li>{this.state.board[3][5]}</li>
            <li>{this.state.board[3][6]}</li>
            <li>{this.state.board[3][7]}</li>
            <li>{this.state.board[4][0]}</li>
            <li>{this.state.board[4][1]}</li>
            <li>{this.state.board[4][2]}</li>
            <li>{this.state.board[4][3]}</li>
            <li>{this.state.board[4][4]}</li>
            <li>{this.state.board[4][5]}</li>
            <li>{this.state.board[4][6]}</li>
            <li>{this.state.board[4][7]}</li>
            <li>{this.state.board[5][0]}</li>
            <li>{this.state.board[5][1]}</li>
            <li>{this.state.board[5][2]}</li>
            <li>{this.state.board[5][3]}</li>
            <li>{this.state.board[5][4]}</li>
            <li>{this.state.board[5][5]}</li>
            <li>{this.state.board[5][6]}</li>
            <li>{this.state.board[5][7]}</li>
            <li>{this.state.board[6][0]}</li>
            <li>{this.state.board[6][1]}</li>
            <li>{this.state.board[6][2]}</li>
            <li>{this.state.board[6][3]}</li>
            <li>{this.state.board[6][4]}</li>
            <li>{this.state.board[6][5]}</li>
            <li>{this.state.board[6][6]}</li>
            <li>{this.state.board[6][7]}</li>

            <li>{this.state.board[7][0]}</li>
            <li>{this.state.board[7][1]}</li>
            <li>{this.state.board[7][2]}</li>
            <li>{this.state.board[7][3]}</li>
            <li>{this.state.board[7][4]}</li>
            <li>{this.state.board[7][5]}</li>
            <li>{this.state.board[7][6]}</li>
            <li>{this.state.board[7][7]}</li>
          </ul>
        </section>
        <footer>
          <button> Play Again?</button>
        </footer>
      </div>
    )
  }
}
