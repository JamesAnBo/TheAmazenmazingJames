import React from 'react'
import Maze from './maze'
import Picture from './picture'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>REACT QUICKLY</h1>
        <Maze />
        <Picture />
      </div>
    )
  }
}
