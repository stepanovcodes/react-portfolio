import React from 'react'
// import Lsb from './Global-content/Lsb'
import Herosec from './Herosec'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Portfolio from './Portfolio'
// import Testimonials from './Main-Components/Testimonials'
// import Clientlogos from './Main-Components/Clientlogos'
// import Pricing from './Main-Components/Pricing'
// import Contact from './Main-Components/Contact'

export default function Main() {
  return (
    <main className="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">

                {/* <Lsb/> this component will used by mobile devices */}

                <Herosec/>
                <About/>
                 <Resume/>
                
                <Skills/>
                <Portfolio/>
                {/*<Testimonials/>
                <Contact/> */}
                
            </div>
        </div>
    </main>
  )
}
