import { use } from 'react'
import './App'
import Person from './user';
export default function Hello({user})
{
    const allUsers = use(user);
    console.log(allUsers)
   
    return(
        <div className="myDiv">
            <h3>Hello Bangladesh</h3>
            <h4 style={{
                color:"white"
            }}>
                User details 
                
            </h4>
            {
                    allUsers.map(person =><Person person={person}></Person>)
             }

            
            


        </div>
    )
}