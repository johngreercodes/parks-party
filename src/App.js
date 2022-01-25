import React, { useState, useEffect} from 'react'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import ParkItem from './components/ParkItem'
import StateItem from './components/StateItem'
import states from './data/states.json'

const App = () => {
  const API_KEY = process.env.REACT_APP_NPS_KEY
  const [parks, setParks] = useState([])
  const [myState, setMyState] = useState(null)

  useEffect( ()=>{
    async function getParks() {
      const response = await axios.get(`${BASE_URL}&api_key=${API_KEY}&stateCode=${myState}`) // 
      setParks(response.data.data) 
    }
    getParks()
  } , [myState] )

  const getMyState = (choiceState) => {
    console.log(choiceState)
    setMyState(choiceState)
    console.log(myState)
  }

  return (
    <div>
      <h1>welcome to the parks party</h1>
      <h2>select a state to get parks</h2>
      {
        states.data.map((state)=>(
          <StateItem 
            key={state.id} 
            name={state.name}
            code={state.code}
            getMyState={getMyState}
          />
        ))
      }
      <ParkItem parks={parks}/>
    </div>
  );
}

export default App

//