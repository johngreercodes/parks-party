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
  const [myState, setMyState] = useState('AL')

  useEffect( ()=>{
    async function getParks() {
      const response = await axios.get(`${BASE_URL}&api_key=${API_KEY}&stateCode=${myState}`) 
      setParks(response.data.data) 
    }
    getParks()
  } , [myState] )

  // const getMyState = (choiceState) => {
  //   choiceState.preventDefault()
  //   setMyState(choiceState)
  //   console.log(choiceState.target[0][0].value)
  // }

  const handleChange = (event) => {
    setMyState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi')
  }

  return (
    <div>
      <h2>select a state 📍 get some parks 🌳</h2>
      <p>powered by the <a href="https://www.nps.gov/subjects/developer/api-documentation.htm" target="_blank">National Park Service API</a> and <a href="https://reactjs.org/" target="_blank">React</a></p>
      <form onSubmit={handleSubmit}>
        <select value={myState.value} onChange={handleChange}>
          {
            states.data.map((state)=>(
              <StateItem 
                key={state.id} 
                name={state.name}
                code={state.code}
                // getMyState={getMyState}
              />
            ))
          }
        </select>
      </form>
      <ParkItem parks={parks}/>
    </div>
  );
}

export default App