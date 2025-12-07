import { use } from 'react'
import './App'
import DetailsFrnd from './friendDetails';

export default function Users({user})
{
    const allUser = use(user)

    return (
        <div className="myDiv">
            <p>All user : {allUser.length}</p>

            <ul>
                {
                    allUser.map(user=><DetailsFrnd frd={user}></DetailsFrnd>)
                }
            </ul>
        </div>
    );
}