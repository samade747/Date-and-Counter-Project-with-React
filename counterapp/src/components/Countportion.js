export default function Countportion(){
    function countingless(){

    }

    function countingadd(){

    }

    return(
        <div className="Counterbutton" style={{display: "flex", margin: "30px", padding: "10px"}}>
            <button onClick={countingadd} style={{width: "100px", height: "100px", fontSize: "35px"}}>+</button>
            <p style={{fontWeight: "1800px", fontSize: "35px", margin: "15px"}}>COUNT: {}</p>
            <button onClick={countingless} style={{width: "100px", height: "100px", fontSize: "35px"}}>-</button>
        </div>

    )
}