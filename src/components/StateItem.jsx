import React from 'react'
import states from '../data/states'

const StateItem = (props) => {

    return (
        <div>
            {
                props.states.map((state)=>(
                    <div key={state.id}>
                        <p>{state.name}</p>
                        <p>{state.code}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default StateItem