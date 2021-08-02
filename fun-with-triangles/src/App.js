import './App.css';
import { useState } from "react"
import Hypotenuse from './pages/Hypotenuse';
import Inequality from './pages/Inequality';
import Angles from './pages/Angles';
import Quiz from './pages/Quiz';

function App() {

  const [hypotenuse, setHypotenuse] = useState(false)
  const [area, setArea] = useState(false)
  const [quizz, setQuizz] = useState(false)
  const [angles, setAngles] = useState(false)

  const handleBack = () => {
    console.log("In handleback function...")
    setAngles(false);
    setArea(false);
    setQuizz(false);
    setHypotenuse(false);
  }

  return (
    <div className="App">
      {(!hypotenuse && !area && !angles && !quizz) && <div className="flex containers outer-container">
        <h1 className="heading">Welcome to Fun with Triangles</h1>
        <div className="containers flex">
          <div onClick={() => setHypotenuse(true)} className="top-container rounded cursor">
            <div className="hypotenuse">Know the hypotenuse</div>
          </div>
          <div className="bottom-container flex">
            <div onClick={() => setArea(true)} className="bottom-left rounded cursor">
              Triangle Inequality?
            </div>
            <div onClick={() => setQuizz(true)} className="bottom-middle rounded cursor">
              Quizz time
            </div>
            <div onClick={() => setAngles(true)} className="bottom-right rounded cursor">
              Know the angles
            </div>
          </div>
        </div>
      </div>}
      {hypotenuse && <div className="flex containers outer-container">
        <Hypotenuse handleBack={handleBack} />
      </div>}
      {area && <div className="flex containers outer-container">
        <Inequality handleBack={handleBack} />
      </div>}
      {angles && <div className="flex containers outer-container">
        <Angles handleBack={handleBack} />
      </div>}
      {quizz && <div className="flex containers outer-container">
        <Quiz handleBack={handleBack} />
      </div>}
    </div>
  );
}

export default App;
