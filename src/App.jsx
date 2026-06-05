import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from "./Components/NavBar"
import Hero from './Components/Hero'
import LoveButton from './Components/LoveButton'


function App() {
 
  // let age =0;

  const [age, setAge] = useState (12)

  return (
   <>
    <NavBar></NavBar>
    <Hero></Hero>
    <LoveButton label = "like" color="green"></LoveButton>
      
    <h1>
      {age}
    </h1>
    <button onClick={()=>{

        setAge(age+1)
    }}>

        Augmenter l'age
    </button>
   </>
  )
}

export default App
