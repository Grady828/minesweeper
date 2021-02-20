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
    // 'id':
    state: '',
    // mines: 10,
  }

  handleClickCell = async (row, col) => {
    if (
      this.state.id === undefined ||
      this.state.state === 'won' ||
      this.state.state === 'lost' ||
      this.state.board[row][col] !== ' '
    ) {
      return
    }

    const url = `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`

    const body = { row: row, col: col }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    const game = await response.json()
    this.setState(game)
  }
  handleNewGame = async () => {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    const game = await response.json()
    this.setState(game)
  }

  render() {
    // let header = 'Mine Sweeper'
    let header = 'Minesweeper'

    if (this.state.state === 'lost') {
      header = 'You Lose'
    }
    if (this.state.state === 'won') {
      header = 'You Win!!'
    }

    return (
      <div>
        <header>
          <h1>{header}</h1>
        </header>
        <section>
          <ul>
            {this.state.board.map((boardRow, rowIndex) => {
              return boardRow.map((cell, columnIndex) => {
                return (
                  <li
                    key={columnIndex}
                    className={this.state.board[0][0] === ' ' ? '' : 'taken'}
                    onClick={() => this.handleClickCell(rowIndex, columnIndex)}
                  >
                    {cell}
                  </li>
                )
              })
            })}
          </ul>
        </section>
        <footer>
          <button onClick={this.handleNewGame}> Play Again?</button>
        </footer>
      </div>
    )
  }
}
