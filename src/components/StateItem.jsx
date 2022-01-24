import React from 'react'

const StateItem = (props) => {
   
    const logState = () => {
        console.log(`${props.code}`)
    }

   return ( 
   <button key={props.id} type="button" id="button" onClick={logState}>
        {props.name}
    </button>
   )
}

export default StateItem