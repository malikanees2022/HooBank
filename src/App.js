import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AllCard from './components/AllCard'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Hero /> 
        <AllCard />
        <Footer />
      </div>
    </>
  )
}

export default App