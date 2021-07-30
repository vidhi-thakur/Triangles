import './App.css';
import { useState } from "react"
import Hypotenuse from './pages/Hypotenuse';
import Area from './pages/Area';

function App() {

  const [hypotenuse, setHypotenuse] = useState(false)
  const [area, setArea] = useState(false)
  const [quizz, setQuizz] = useState(false)
  const [angles, setAngles] = useState(false)

  return (
    <div className="App">
      {(!hypotenuse && !area && !angles && !quizz) && <div className="flex containers outer-container">
        <h1 className="heading">Welcome to Fun with Triangles</h1>
        <div className="containers flex">
          <div onClick={() => setHypotenuse(true)} className="top-container rounded cursor">
            <div className="hypotenuse">calculate hypotenuse</div>
          </div>
          <div className="bottom-container flex">
            <div onClick={() => setArea(true)} className="bottom-left rounded cursor">
              calculate area
            </div>
            <div onClick={() => setQuizz(true)} className="bottom-middle rounded cursor">
              take a quizz
            </div>
            <div onClick={() => setAngles(true)} className="bottom-right rounded cursor">
              calculate angles
            </div>
          </div>
        </div>
      </div>}
      {hypotenuse && <div className="flex containers outer-container">
        <Hypotenuse />
      </div>}
      {area && <div className="flex containers outer-container">
        <Area />
      </div>}
    </div>
  );
}

export default App;
