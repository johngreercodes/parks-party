import React from 'react'

const ParkItem = (props) => {
    return (
        <div> 
            {
               props.parks.map((park)=>(
                   <div key={park.id} id='parkItem'>
                       <img width="50%" src={park.images[0].url} alt={park.fullName}/>
                       <h1>{park.fullName}</h1>
                       <p>{park.description}</p>
                       <a href={park.directionsUrl} target="_blank"><button type="button" id="button">Take me there!</button></a>
                   </div>
               ))
            }
        </div>
    )
}

export default ParkItem
