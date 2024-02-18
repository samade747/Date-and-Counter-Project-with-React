export default function Header(){
    function decrement(){

    }

    function increment(){
        
    }


    return(
        <div class="button">
            <button onClick={increment} style={{width: "50px", height: "50px", fontSize: "35px"}}>-</button>
            <p style={{fontWeight: "800px", fontSize: "35px", marginBottom: "0"}}>STEP: {}</p>
            <button onClick={decrement} style={{width: "50px", height: "50px", fontSize: "35px"}}>+</button>
        </div>
    )
}