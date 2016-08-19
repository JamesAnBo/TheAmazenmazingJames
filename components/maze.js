import React from 'react'
import Cell from './cell'
import App from './App'
import {story1, story2, story3, story4, story5} from './story'

export default class Maze extends React.Component {
constructor (props){
  super(props)
  this.state = {images:[
  {src:"./public/Village.png", story: story1},
  {src:"./public/Arrow.jpg", story: story2},
  {src:"./public/Mountain.png", story: story3},
  {src:"./public/Valley.png", story: story4},
  {src:"./public/minotaur.png", story: story5}
  ] }
}


  render () {
    return (
<<<<<<< HEAD
      <div className="background">
            {
              this.state.images.map(image => <Cell key={image.src} src={image.src}/>)
            }
=======
      <div>
        {
          this.state.images.map(image => <Cell key={image.src} src={image.src} story={image.story} clickAction={this.props.clickAction}/>)
        }
>>>>>>> a4707cf38821a657dc95301dc4351dc4442f73be
      </div>

    )
  }
}
