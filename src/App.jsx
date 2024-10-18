import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Topitems from './components/Topitems'

function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Topitems/>
    </div>
    </>
  )
}

export default App
