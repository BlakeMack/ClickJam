import { useState } from 'react'
import './App.css'
import * as Tone from 'tone'

function App() {
  const [count, setCount] = useState(0)

  // const triggerSynth = () => {
  //   //create a synth and connect it to the main output (your speakers)
  //   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //   //play a middle 'C' for the duration of an 8th note
  //   synth.triggerAttackRelease(["D4", "F4", "A4", "C5", "E5"], "8n");
  // }

  const triggerPianoChord = () => {
    const sampler = new Tone.Sampler({
      urls: {
        "C4": "Keyzone_C4.mp3",
        "D#4": "Keyzone_Ds4.mp3",
        "F#4": "Keyzone_Fs4.mp3",
        "A4": "Keyzone_A4.mp3",
      },
      release: 1,
      baseUrl: "src/assets/Mp3-Keyzone-oneshots-small/",
    }).toDestination();
    Tone.loaded().then(() => {
      sampler.triggerAttackRelease(["C4", "E4", "G4", "Bb4"], 1);
    })
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={triggerPianoChord}>
          C major chord
        </button>
      </div>
    </div>
  )
}

export default App
