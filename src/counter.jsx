import { useState } from "react"

export default function Counter()
{
    const styleDiv={
          padding:"20px 0px",
        border:"2px solid yellow",
        borderRadius:'20px',
        marginBottom:"30px"
    };
     const [count,setCount]=useState(0);
     function handleclick()
     {
        setCount(count+1);
     }

    return(
        <div style={styleDiv}>
            <h3>Count : {count}</h3>
            <button onClick={handleclick}>Add more</button>

        </div>
    )
}