import './App'
export default function Person({person})
{
   const {name,id,username,email,phone,website,company}= person;
    return(
        <div style={{
            padding:"10px 0px",
            color:"white",
            border:"2px solid red",
            borderRadius:"25px",
            marginTop:"15px"
        }}>
            <p>User Name : {name} </p>
            <p>User User Name : {username} </p>
            <p>User Id : {id}</p>
            <p>User E-mail : {email} </p>
            <p>User Phone : {phone} </p>
            <p>User Website : {website}</p>
            <p>User Company : {company.name}</p>
        </div>

    )
}