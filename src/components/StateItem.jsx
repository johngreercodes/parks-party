import React from 'react'

const StateItem = (props) => {
   
    const logState = () => {
        console.log("ding")
    }

   return ( 
   <button type="button" key={props.key} onClick={logState}>
        {props.name}
    </button>
   )
}

export default StateItem