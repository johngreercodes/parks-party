import React from 'react'
import states from './states'

const StatePicker = (props) => {

    return (
        <div>
            {
                states.map((state)=>(
                    <div key={state.id}>
                        <p>{state.name}</p>
                        <p>{state.code}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default StatePicker