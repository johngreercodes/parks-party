import React from 'react'

const StateItem = (props) => {
   
    const logState = () => {
        console.log(`${props.code}`)
    }

   return ( 
   <button type="button" id="button" key={props.key} onClick={logState}>
        {props.name}
    </button>
   )
}

export default StateItem