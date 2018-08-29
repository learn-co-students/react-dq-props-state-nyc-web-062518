import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'
import MasterHog from './MasterHog'

let eyeColorMapper = {
  'blue': BlueBaby,
  'sun': SunBaby,
  'glowing': GlowingBaby
}

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`



export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 200
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
      if (newWeight >= 0) {
        this.setState({weight: newWeight})
      }

  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye: {this.props.handleEyeChange}</h4>

        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          {console.log("this is this in line 55", this.props)}
          <img src={eyeColorMapper[this.props.handleEyeChange]} style={{height: `${this.state.weight}px`}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
