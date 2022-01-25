import React from 'react'

const StateItem = (props) => {

   return ( 
   <button key={props.id} type="button" id="button" onClick={()=>props.getMyState(props.code)}>
        {props.name}
    </button>
   )
}

export default StateItem