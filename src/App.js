import React, { useState, useEffect} from 'react'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'

const App = () => {
  const [parks, setParks] = useState([])
  const API_KEY = process.env.REACT_APP_NPS_KEY

  useEffect( ()=>{
    async function getParks() {
      const response = await axios.get(`${BASE_URL}&api_key=${API_KEY}`)
      setParks(response.data.results)
      console.log(parks)
    }
    getParks()
  } , [] )

  return (
    <div>
      <h2>welcome to the parks party</h2>
      <h3>now on heroku</h3>
      <h4>now with our own URL</h4>
    </div>
  );
}

export default App