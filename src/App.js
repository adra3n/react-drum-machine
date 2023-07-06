import React, { Component } from 'react'
import './App.css'
import DrumSounds from './DrumSounds'
import DrumSettings from './DrumSettings'
import DrumContainer from './DrumContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSound: 'Make some noise!',
    }

    this.playSound = this.playSound.bind(this)
  }

  playSound(event) {
    try {
      // need try/catch to filter out unmapped key presses
      // used find() to return object
      const drumKey = DrumSounds.find(
        (item) =>
          item.keyCode === event.keyCode ||
          item.keyPressed === event.target.innerText
      ) // for both keyDown and onClick
      const sound = document.getElementById(drumKey.keyPressed)
      const drumpad = document.getElementById(drumKey.key)

      sound.currentTime = 0

      sound.play()
      drumpad.setAttribute('class', 'drum-pad playing') // change background
      setTimeout(
        () => drumpad.setAttribute('class', 'drum-pad'),
        sound.duration * 1000
      ) // reset class when clip finishes

      this.setState({
        currentSound: drumKey.key,
      })
    } catch (error) {
      console.log(error)
      console.log(event.key + ' not mapped to drumpad!')
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playSound)
  }

  render() {
    return (
      <div className="App">
        <h1>FreeCodeCamp Drum Machine Project</h1>
        <div id="drum-machine">
          <DrumContainer
            drumSounds={DrumSounds}
            clickHandler={this.playSound}
          />
          <DrumSettings display={this.state.currentSound} />
        </div>
      </div>
    )
  }
}

export default App
