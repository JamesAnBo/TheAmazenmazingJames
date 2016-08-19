import React from 'react'
import App from './App'
import Maze from './maze'

export default class Cell extends React.Component {



  render () {
    return (
      <div>
        <img src={this.props.src} width="100" height="100" />
      </div>


    )
  }
}
