import React from 'react'

const ParkItem = (props) => {
    return (
        <div> 
            {
               props.parks.map((park)=>(
                   <div key={park.id}>
                       <h1>{park.fullName}</h1>
                       <img width="50%" src={park.images[0].url} alt={park.fullName}/>
                       <button onClick={park.directionsUrl} type="button">Take me there!</button>
                   </div>
               ))
            }
        </div>
    )
}

export default ParkItem