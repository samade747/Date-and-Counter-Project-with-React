export default function Statusbar({ count }) {
    // gettng today date
    const today = new Date()

    // copyng a today date avoid modifying the original date object
    const futureDate = new Date(today.getTime());

      // Calculate the future date based on the count
      futureDate.setDate(futureDate.getDate() + count)

       // Convert the future date to a string
       const dateString = futureDate.toDateString();

        return(
        <h2 style={{fontSize: '25px', fontWeight: "500px", color: "white", backgroundColor: "blue", borderRadius: '2px', paddin: '10px', border: '2px solid White'}}>
            { count === 0
            ? `Today ${today.toDateString()}` // Display today's date
            : `${count} Days From Today Is  ${dateString}`
            }
        </h2>
    )


}