import { useState } from 'react'
import Route from './route/Route'
import Header from './component/Header'
import Footer from './component/Footer'
import Homepage from './page/Homepage'
import Hero from './component/Hero'
import Howitworks from './component/Howitworks'
import Explore from './component/Explore'
import Clientreviews from './component/Clientreviews'
import News from './component/News'
import Signup from './component/Signup'
import Footermenu from './component/Footermenu'

function App() {
  return(
    <div> 
      <Header/>
      <Homepage/>
      <Hero/>
      <Howitworks/>
      <Explore/>
      <Clientreviews/>
      <News/>
      <Signup/>
      <Footermenu/>
      <Footer/>
    </div>
  )
}

export default App
