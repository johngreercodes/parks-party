import React from 'react'

const StateItem = (props) => {

   return ( 
   <option key={props.id} value={props.code}>{props.name}</option>
   
   // <button key={props.id} type="button" id="button" onClick={()=>props.getMyState(props.code)}>
   //      {props.code}
   //  </button>
   )
}

export default StateItem