import React from 'react'
import Header from '../component/Header'
import Homepage from '../page/Homepage'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Howitworks from '../component/Howitworks'
import Explore from '../component/Explore'
import Clientreviews from '../component/Clientreviews'
import News from '../component/News'
import Signup from '../component/Signup'
import Footermenu from '../component/Footermenu'


export default function Route() {
  return (
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
