import React from 'react'
import Cell from './cell'
import App from './App'

export default class Maze extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the Maze!</h1>
        <Cell/> 
        <Cell> <img src="./public/minotaur.png" height="100" width="100"/> </Cell>
        <Cell> <img src="./public/Mountain.png" height="100" width="100"/> </Cell>
        <Cell> <img src="./public/Valley.png" height="100" width="100"/> </Cell>
        <Cell> <img src="./public/Village.png" height="100" width="100"/> </Cell>
      </div>
    )
  }
}


        //<Cell> <img src="./public/James.png" height="100" width="100"/> </Cell>
