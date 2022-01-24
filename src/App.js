import React, { useState, useEffect} from 'react'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import ParkItem from './components/ParkItem'
import StateItem from './components/StateItem'
import states from './data/states.json'

const App = () => {
  const [parks, setParks] = useState([])
  const [usState, setUsState] = useState('Your State')
  const API_KEY = process.env.REACT_APP_NPS_KEY

  useEffect( ()=>{
    async function getParks() {
      const response = await axios.get(`${BASE_URL}&api_key=${API_KEY}`) // &stateCode=${states}
      setParks(response.data.data) 
    }
    getParks()
  } , [] )

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
          />
        ))
      }
      <ParkItem parks={parks}/>
    </div>
  );
}

export default App

//