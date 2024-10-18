import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Topitems from './components/Topitems'
import Banner from './components/Banner'
import Services from './components/Services'

function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Topitems/>
      <Banner/>
      <Services/>
    </div>
    </>
  )
}

export default App
