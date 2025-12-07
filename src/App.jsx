import Player from './player';
import Counter from './counter';
import './App.css'
import Friends from './friends';
import Users from './users';
import { Suspense } from 'react';
import Hello from './hello';




const fetchFriends = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriend = async()=>
{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}


const allUsers = async()=>
{
  const res = await fetch ("https://jsonplaceholder.typicode.com/users");
  return res.json();
}


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

  const user = fetchFriends;

  const friendFetch = fetchFriend();

  const myUser = allUsers();


  return (
    <>
    <h1>React Core Concept</h1>

   {/* <Suspense fallback={<p>Loading ..................</p>}>

   <Users user={user}></Users>

   </Suspense> */}
<Suspense fallback={<p>loading....................</p>}>
<Friends friend={friendFetch}></Friends>
</Suspense>

    <Player></Player>
    <Counter></Counter>

    <Suspense fallback={<p>Users are loading..................</p>}>
    <Hello user={myUser }></Hello>
    </Suspense>

    
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