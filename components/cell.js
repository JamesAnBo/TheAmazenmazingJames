import React from 'react'
import App from './App'
import Maze from './maze'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }

handleClick(){
  this.props.clickAction(this.props.story)
}

  render () {
    return (
      <div>
        <h1 onClick={this.handleClick}>hello world</h1>
      </div>


    )
  }
}
