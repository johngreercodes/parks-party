import React from 'react'

const StateItem = (props) => (
    <div key={props.key}>
        <button type="button">{props.name}</button>
    </div>
)

export default StateItem