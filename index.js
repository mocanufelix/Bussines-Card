import React from 'react'
import ReactDOM from 'react-dom'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


ReactDOM.render(
    <div className='wrapper'>
        <div className='card'>
            <Info />
            <About />
            <Interests /> 
            <Footer /> 
        </div>              
    </div>,
    document.getElementById('root')
)