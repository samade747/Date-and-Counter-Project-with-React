import logo from './logo.svg';
import './App.css';
import StepPortion from './components/Stepportion';
import { useState } from "react";
import Countportion from './components/Countportion';
import Statusbar from './components/Statusbar';

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)



  
  return (
    <div className='counterParent'>
    <div className='dateCounter'>
      <StepPortion step={step} setStep={setStep} />
      <Countportion setCount={setCount} count={count} step={step} />  
      <Statusbar count={count} />
  

    </div>
    </div>
  );
}

export default App;
