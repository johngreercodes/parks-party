import React from 'react'

const ParkItem = (props) => {
    return (
        <div>
            {
                props.parks.map((park)=>(
                    <div></div>
                ))
            }
        </div>
    )
}

export default ParkItem