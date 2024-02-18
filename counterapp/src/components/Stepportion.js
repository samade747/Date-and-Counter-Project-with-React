export default function StepPortion({ step, setStep }){
    
    function increment(){
        setStep(step+1)
    }

    function decrement(){
        setStep(step-1)
    }



    return(
        <div class="stepbutton" style={{display: "flex", margin: "30px", padding: "10px"}}>
            <button onClick={increment} style={{width: "100px", height: "100px", fontSize: "35px"}}>+</button>
            <p style={{fontWeight: "1800px", fontSize: "35px", margin: "15px"}}>STEP: {step}</p>
            <button onClick={decrement} style={{width: "100px", height: "100px", fontSize: "35px"}}>-</button>
        </div>
    )
}