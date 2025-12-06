import Player from './player';
import Counter from './counter';
import './App.css'

function App()
{
  // function handleclick1()
  // {
  //   alert("Click me 1");
  //   console.log("Click me 1")
  // }
  const name = (nam)=>
  {
    alert("My name is - "+nam);
  }

  return (
    <>
    <h1>React Core Concept</h1>
    <Player></Player>
    <Counter></Counter>

    
    {/* <button onClick={handleclick1}>Click me 1</button> */}
    {/* <button onClick={function handleclick1()
  {
    alert("Click me 1");
    console.log("Click me 1")
  }}>Click me 1</button> */}

  {/* <button onClick={()=>
    alert("Click me 1")
}>Click me 1</button> */}

  {/* <button onClick={()=>
   {
     alert("Click me 1")
    console.log("Click me 1")
   }
}>Click me 1</button> */}

<button onDoubleClick={()=>name("Tonmoy Chandra Sarker")}>See your name </button>
    </>
  )

}
export default App;