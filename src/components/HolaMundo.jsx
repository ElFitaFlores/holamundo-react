import React from 'react'

const HolaMundo = () => {
    const Hello = 'Hola mundo'
    const isTrue = true
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt=""/>
            {isTrue ? <h4>Verdadero</h4> : <h4>Falso</h4>}
            {isTrue && <h5>True</h5>}
        </div>
    )
}

export default HolaMundo