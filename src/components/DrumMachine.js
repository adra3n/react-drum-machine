import React, { useEffect, useState } from 'react'

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('Click a button to play!')

  const play = (str) => {
    let newDisplayText = ''

    if (str === 'Q' || str === 'q') {
      newDisplayText = 'Rock on!'
    } else if (str === 'W' || str === 'w') {
      newDisplayText = 'Drum Roll!'
    } else if (str === 'E' || str === 'e') {
      newDisplayText = 'Music Time!'
    } else if (str === 'A' || str === 'a') {
      newDisplayText = 'Big Hit!'
    } else if (str === 'S' || str === 's') {
      newDisplayText = 'Party On!'
    } else if (str === 'D' || str === 'd') {
      newDisplayText = 'Jamming On!'
    } else if (str === 'Z' || str === 'z') {
      newDisplayText = 'Popstarts!'
    } else if (str === 'X' || str === 'x') {
      newDisplayText = 'On the Mood!'
    } else if (str === 'C' || str === 'c') {
      newDisplayText = 'On the Rhythm!'
    }

    setDisplayText(newDisplayText)

    const audio = new Audio(`../assets/${str}.mp3`)
    audio.play()
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keystroke = event.key.toUpperCase()
      play(keystroke)
    }

    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  return (
    <div className="container" id="drum-machine">
      <h1 className="text-center">Lets Rock!</h1>
      <div className="card my-3">
        <div className="card-body">
          <div className="text-center" id="display">
            {displayText}
          </div>
        </div>
      </div>
      <div className="align-items-center text-center">
        <button
          className="drum-pad btn col-3 btn-primary"
          id="drum-0"
          onClick={() => play('Q')}
        >
          Q
          <audio src="../assets/Q.mp3" className="clip" id="Q" />
        </button>
        <button
          className="drum-pad btn col-3 btn-primary"
          id="drum-1"
          onClick={() => play('W')}
        >
          W
          <audio src="../assets/W.mp3" className="clip" id="W" />
        </button>
        <button
          className="drum-pad btn col-3 btn-primary"
          id="drum-2"
          onClick={() => play('E')}
        >
          E
          <audio src="../assets/E.mp3" className="clip" id="E" />
        </button>
      </div>
      <br />

      <div className="text-center">
        <button
          className="drum-pad btn col-3 btn-success"
          id="drum-3"
          onClick={() => play('A')}
        >
          A
          <audio src="../assets/A.mp3" className="clip" id="A" />
        </button>
        <button
          className="drum-pad btn col-3 btn-success"
          id="drum-4"
          onClick={() => play('S')}
        >
          S
          <audio src="../assets/S.mp3" className="clip" id="S" />
        </button>
        <button
          className="drum-pad btn col-3 btn-success"
          id="drum-5"
          onClick={() => play('D')}
        >
          D
          <audio src="../assets/D.mp3" className="clip" id="D" />
        </button>
      </div>
      <br />

      <div className="text-center">
        <button
          className="drum-pad btn col-3 btn-warning"
          id="drum-6"
          onClick={() => play('Z')}
        >
          Z
          <audio src="../assets/Z.mp3" className="clip" id="Z" />
        </button>
        <button
          className="drum-pad btn col-3 btn-warning"
          id="drum-7"
          onClick={() => play('X')}
        >
          X
          <audio src="../assets/X.mp3" className="clip" id="X" />
        </button>
        <button
          className="drum-pad btn col-3 btn-warning"
          id="drum-8"
          onClick={() => play('C')}
        >
          C
          <audio src="../assets/C.mp3" className="clip" id="C" />
        </button>
      </div>
    </div>
  )
}

export default DrumMachine
