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
        <h1>The Amazenmazing James</h1>
        <Maze clickAction={this.clickAction}/>
        <div className="col-md-5">
        <h2>{this.state.story}</h2>
        </div>
      </div>
    )
  }
}
