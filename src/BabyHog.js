import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 10,
      height: 200
    }
  }



  changeWeightAndSize = (e) => {
    // nothing needs to change here
    let newWeight;
    let newHeight;
    if (e.target.name === "+") {
      newWeight = this.state.weight + 10
      newHeight = this.state.height + 10
    }
    else if (this.state.weight > 0 && e.target.name === "-") {
      newWeight = this.state.weight - 10
      newHeight = this.state.height - 10
    }
    else if (this.state.weight === 0) {
      newWeight = this.state.weight
    }
    // const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight,
      height: newHeight
    })
  }


  babyPics(){
    if (this.props.eyeColor === "blue") {
      return BlueBaby
    }
    if (this.props.eyeColor === "sun") {
      return SunBaby
    }
    if (this.props.eyeColor === "glowing") {
      return GlowingBaby
    }
    if (this.props.eyeColor === "normal") {
      return normalBaby
    }
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Name {this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+" onClick={this.changeWeightAndSize}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeightAndSize}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.babyPics()} style={{height: `${this.state.height}px`}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
