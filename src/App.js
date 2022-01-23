import React, { useState, useEffect} from 'react'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import ParkItem from './components/ParkItem'
import StateItem from './components/StateItem'
import states from './data/states.json'

const App = () => {
  const [parks, setParks] = useState([])
  const API_KEY = process.env.REACT_APP_NPS_KEY

  useEffect( ()=>{
    async function getParks() {
      const response = await axios.get(`${BASE_URL}&api_key=${API_KEY}`) //&stateCode=${states}
      setParks(response.data.data) 
    }
    getParks()
  } , [] )

  return (
    <div>
      <h2>welcome to the parks party</h2>
      <StateItem 
        key={states.id}
        name={states.name}
        code={states.code}
      />
      <ParkItem parks={parks}/>
    </div>
  );
}

export default App

//