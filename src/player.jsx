import './App'
import { useState } from "react"

export default function Player()
{
     const styleDiv = {
        padding:"20px 10px",
        border:'2px solid red',
        margin:"20px 0px",
        borderRadius:"25px"
    }

    const [score,setScore] = useState(0);
    const [six,setSix] = useState(0);
    const [four,setFour] = useState(0);
    const [single,setSingle] = useState(0);
    function handleSingle()
    {
       const updateScore = score+1;
        setScore(updateScore);
        const totalSingle = single + 1;
        setSingle(totalSingle);
    };

    function handleFour()
    {
         const updateScore = score+4;
        setScore(updateScore);
        const totalFour = four+1;
        setFour(totalFour);
    }

    function handleSix()
    {
         const updateScore = score+6;
        setScore(updateScore);
        const totalSix = six+1;
        setSix(totalSix);
    }

   return (
    <div style={styleDiv}>
        <h3 className="">Team name : Bangladeshi Player</h3>
       {
        score>=50 && <p>Your Score above 50 </p>
       }
       {
        score>=100 && <p>Your Score above 100 </p>
       }
        <h2>Total Score : {score}</h2>
        <button className='btn' onClick={handleSingle}>Single</button>
        <button  className='btn'  onClick={handleFour}>Four</button>
        <button  className='btn' onClick={handleSix}>Six</button>
        <p><small>Total six : {six}</small></p>
        <p><small>Total four : {four}</small></p>
        <p><small>Total single : {single}</small></p>
    </div>
   )
   
    
}