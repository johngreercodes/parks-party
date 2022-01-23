import React from 'react'

const ParkItem = (props) => {
    return (
        <div> 
            {
               props.parks.map((park)=>(
                   <div key={park.id}>
                       <h1>{park.fullName}</h1>
                   </div>
               ))
            }
        </div>
    )
}

export default ParkItem