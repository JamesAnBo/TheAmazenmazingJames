import React from 'react'
import Cell from './cell'
import App from './App'

export default class Maze extends React.Component {
constructor (props){
  super(props)
  this.state = {images:[
  {src:"./public/Village.png"},
  {src:"./public/Arrow.jpg"},
  {src:"./public/Mountain.png"},
  {src:"./public/Valley.png"},
  {src:"./public/minotaur.png"}
  ] }
}


  render () {
    return (
      <div className="background">
            {
              this.state.images.map(image => <Cell key={image.src} src={image.src}/>)
            }
      </div>

    )
  }
}


        //<Cell> <img src="./public/James.png" height="100" width="100"/> </Cell>
