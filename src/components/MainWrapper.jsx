import React from 'react'
import Lsb from './Lsb'
import Herosec from './Herosec'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default function Main() {
  return (
    <main className="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">

                <Lsb/>
                <Herosec/>
                <About/>
                <Resume/>   
                <Skills/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
                
            </div>
        </div>
    </main>
  )
}
