import React, { useEffect, useState } from 'react'

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('Click a button!')
  const [activeButton, setActiveButton] = useState('')

  const play = (str) => {
    setDisplayText(str)

    const audio = new Audio(require(`../assets/${str}.mp3`))
    audio.play()
  }

  const handleButtonHover = (buttonId) => {
    setActiveButton(buttonId)
  }

  const handleButtonLeave = () => {
    setActiveButton('')
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keystroke = event.key.toUpperCase()

      if (
        keystroke === 'Q' ||
        keystroke === 'W' ||
        keystroke === 'E' ||
        keystroke === 'A' ||
        keystroke === 'S' ||
        keystroke === 'D' ||
        keystroke === 'Z' ||
        keystroke === 'X' ||
        keystroke === 'C'
      ) {
        play(keystroke)
        setActiveButton(`drum-${keystroke}`)
      }
    }

    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  return (
    <div className="container pt-5" id="drum-machine">
      <h1 className="text-center text-white">Lets Rock!</h1>
      <div>
        <div className="card-body my-4">
          <div className="text-center" id="display">
            {displayText}
          </div>
        </div>
      </div>
      <div className="align-items-center text-center">
        <button
          className={`drum-pad btn btn-primary ${
            activeButton === 'drum-Q' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-0"
          onClick={() => play('Q')}
          onMouseEnter={() => handleButtonHover('drum-Q')}
          onMouseLeave={handleButtonLeave}
        >
          <p>Q</p>
          <p>Splash</p>
          <audio src={require('../assets/Q.mp3')} className="clip" id="Q" />
        </button>
        <button
          className={`drum-pad btn btn-primary ${
            activeButton === 'drum-W' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-1"
          onClick={() => play('W')}
          onMouseEnter={() => handleButtonHover('drum-W')}
          onMouseLeave={handleButtonLeave}
        >
          <p>W</p>
          <p>China</p>
          <audio src={require('../assets/W.mp3')} className="clip" id="W" />
        </button>
        <button
          className={`drum-pad btn btn-primary ${
            activeButton === 'drum-E' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-2"
          onClick={() => play('E')}
          onMouseEnter={() => handleButtonHover('drum-E')}
          onMouseLeave={handleButtonLeave}
        >
          <p>E</p>
          <p>Tom</p>
          <audio src={require('../assets/E.mp3')} className="clip" id="E" />
        </button>
      </div>
      <br />{' '}
      <div className="text-center">
        <button
          className={`drum-pad btn btn-success ${
            activeButton === 'drum-A' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-3"
          onClick={() => play('A')}
          onMouseEnter={() => handleButtonHover('drum-A')}
          onMouseLeave={handleButtonLeave}
        >
          <p>A</p>
          <p>Snare</p>
          <audio src={require('../assets/A.mp3')} className="clip" id="A" />
        </button>
        <button
          className={`drum-pad btn btn-success ${
            activeButton === 'drum-S' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-4"
          onClick={() => play('S')}
          onMouseEnter={() => handleButtonHover('drum-S')}
          onMouseLeave={handleButtonLeave}
        >
          <p>S</p>
          <p>Crash</p>
          <audio src={require('../assets/S.mp3')} className="clip" id="S" />
        </button>
        <button
          className={`drum-pad btn btn-success ${
            activeButton === 'drum-D' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-5"
          onClick={() => play('D')}
          onMouseEnter={() => handleButtonHover('drum-D')}
          onMouseLeave={handleButtonLeave}
        >
          <p>D</p>
          <p>Hi-Hat</p>
          <audio src={require('../assets/D.mp3')} className="clip" id="D" />
        </button>
      </div>
      <br />
      <div className="text-center">
        <button
          className={`drum-pad btn btn-danger ${
            activeButton === 'drum-Z' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-6"
          onClick={() => play('Z')}
          onMouseEnter={() => handleButtonHover('drum-Z')}
          onMouseLeave={handleButtonLeave}
        >
          <p>Z</p>

          <p>Ride</p>
          <audio src={require('../assets/Z.mp3')} className="clip" id="Z" />
        </button>
        <button
          className={`drum-pad btn btn-danger ${
            activeButton === 'drum-X' && 'active'
          }`}
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          id="drum-7"
          onClick={() => play('X')}
          onMouseEnter={() => handleButtonHover('drum-X')}
          onMouseLeave={handleButtonLeave}
        >
          <p>X</p>
          <p>Kick</p>
          <audio src={require('../assets/X.mp3')} className="clip" id="X" />
        </button>
        <button
          className={`drum-pad btn btn-danger ${
            activeButton === 'drum-C' && 'active'
          }`}
          id="drum-8"
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            paddingTop: '0.5rem',
          }}
          onClick={() => play('C')}
          onMouseEnter={() => handleButtonHover('drum-C')}
          onMouseLeave={handleButtonLeave}
        >
          <p>C</p>
          <p>Bell</p>
          <audio src={require('../assets/C.mp3')} className="clip" id="C" />
        </button>
      </div>
    </div>
  )
}

export default DrumMachine
