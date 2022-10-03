import React from 'react'

function Info(){
    return (
        <div className='info'>
            <img src='./images/image.png' alt='Laura Smith smiling' /> 
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <p>laurasmith.website</p>
            <div className='email'>
                <img src='./images/envelop.png' alt='an icon of a black envelop'/>
                <p>Email</p>
            </div>
        </div>
    )
}

export default Info;