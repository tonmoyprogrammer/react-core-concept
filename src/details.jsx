export default function DetailsFriends({details})
{
   
    return(
        <div>
            <p style={{
                padding:"10px 2px",
                margin:"10px 0px",
                border:"3px solid goldenrod",
                borderRadius:"25px"
            }}>Name : {details.name} </p>

        </div>
    )
}