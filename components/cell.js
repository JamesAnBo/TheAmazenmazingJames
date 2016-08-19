import React from 'react'
import App from './App'
import Maze from './maze'

export default class Cell extends React.Component {
  render () {
    return (
      <div>
        <div className="col-md-1">

        <img src={this.props.src} width="200" height="200" />
        </div>
      </div>


    )
  }
}
