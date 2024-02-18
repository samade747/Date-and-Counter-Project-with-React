export default function Statusbar({count}){
    const date = new Date()
    const convertToString = date.toDateString()

    return(
        <h2 style={{fontSize: '20px', fontWeight: "500px", color: "white", backgroundColor: "black"}}>
            {count === 0 ? `Today ` + convertToString: `${count} Days From Today Is` + convertToString}
        </h2>
    )


}