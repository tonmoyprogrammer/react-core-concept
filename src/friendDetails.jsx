export default function DetailsFrnd({frd})
    {
        
        return(
            <div className="">
                <p style={{
                    padding:"10px 0px",
                    border:"1px solid gray",
                    borderRadius:"25px",
                    backgroundColor:"skyblue"

                }}>User name : {frd.name}</p>

            </div>
        )
    }
