import React from 'react'
import Maze from './maze'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.clickAction=this.clickAction.bind(this)
    this.state = {story: ""}
  }

clickAction(story) {
  this.setState({story: story})
  console.log(story);
}


  render () {
    console.log("this is this.props: ", this.props);
    return (
      <div>
        <h1>The Amazing James REDUX</h1>
        <Maze clickAction={this.clickAction}/>
        <p>{this.state.story}</p>
      </div>
    )
  }
}
