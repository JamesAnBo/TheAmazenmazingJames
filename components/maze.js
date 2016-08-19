import React from 'react'
import Cell from './cell'
import App from './App'

export default class Maze extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the Maze!</h1>
        <Cell />
        <Cell />
        <Cell />
      </div>
    )
  }
}
