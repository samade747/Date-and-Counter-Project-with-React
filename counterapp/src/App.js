import logo from './logo.svg';
import './App.css';
import StepPortion from './components/Stepportion';
import { useState } from "react";
import Countportion from './components/Countportion';

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)



  
  return (
    <div className='counterParent'>
    <div className='dateCounter'>
      <StepPortion step={step} setStep={setStep} />
      <Countportion />
    </div>
    </div>
  );
}

export default App;
