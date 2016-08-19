import React from 'react'
import Cell from './cell'
import App from './App'
import {story1, story2, story3, story4, story5} from './story'

export default class Maze extends React.Component {

constructor(props) {
  super(props)
}



  render () {
    return (
      <div>
        <h1>This is the Maze!</h1>
        <Cell clickAction={this.props.clickAction} story={story1}/>
        <Cell clickAction={this.props.clickAction} story={story2}/>
        <Cell clickAction={this.props.clickAction} story={story3} />
        <Cell clickAction={this.props.clickAction} story={story4} />
        <Cell clickAction={this.props.clickAction} story={story5} />
      </div>
    )
  }
}
