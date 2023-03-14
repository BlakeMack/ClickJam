import { useState } from 'react'
import './App.css'
import * as Tone from 'tone'

const App: React.FC = () => {

  type TriggerPianoChord = () => void;

  type StringArray = Array<string>;

  const triggerPianoChord: TriggerPianoChord = () => {
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
    const c7chord:StringArray = ["C4", "E4", "G4", "Bb4"]
      sampler.triggerAttackRelease(c7chord, 1);
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
