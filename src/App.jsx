import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Topitems from './components/Topitems'
import Banner from './components/Banner'
import Services from './components/Services'
import { useState } from 'react';


function App() {
  
const [mode, setMode] = useState('light');


const toggleMode  = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#0000'
    console.log("light");
    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    console.log("dark")
  }
}

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Hero mode={mode} toggleMode={toggleMode} />
      <Topitems mode={mode} />
      <Banner mode={mode} />
      <Services mode={mode} />
    </div>
    </>
  )
}

export default App
