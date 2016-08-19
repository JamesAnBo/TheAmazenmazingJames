import React from 'react'
import App from './App'
import Maze from './maze'

export default class Cell extends React.Component {

  constructor(props) {
   super(props)
   this.handleClick=this.handleClick.bind(this)
 }

 handleClick(){
   console.log("this is props.story ", this.props.story);
   this.props.clickAction(this.props.story)
 }


  render () {
    return (
      <div>
        <div className="col-md-1">

        <img onClick={this.handleClick} src={this.props.src} width="100" height="100" />
        </div>
      </div>


    )
  }
}
