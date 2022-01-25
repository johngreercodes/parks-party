import React from 'react'

const StateItem = (props) => {

   return ( 
   <button key={props.id} type="button" id="button" onClick={()=>props.getMyState(props.code)}>
        {props.code}
    </button>
   )
}

export default StateItem