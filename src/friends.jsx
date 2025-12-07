
import { use } from 'react';
import './App'
import DetailsFriends from './details';
export default function Friends({friend})
{
    const allfriend = use(friend);
    console.log(allfriend);
    return(
        <div className="myDiv">
            <h3>My all user Friend : {allfriend.length}</h3>
            <div className="">
                {
                    allfriend.map(detail=><DetailsFriends details={detail}></DetailsFriends>)
                }
            </div>
        </div>
        
    )
}