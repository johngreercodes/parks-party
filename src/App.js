import React, { useState, useEffect} from 'react'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import ParkItem from './components/ParkItem'
import StatePicker from './components/StatePicker'

const App = () => {
  const [parks, setParks] = useState([])
  // const [states, setStates] = useState('')
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
      <StatePicker />
      <ParkItem parks={parks}/>
    </div>
  );
}

export default App

//