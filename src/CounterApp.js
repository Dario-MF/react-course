import React, { useState } from 'react'
import PropTypes from 'prop-types'




const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value)

    const addCounter = () => {
        setCounter(counter + 1)
    }
    const deleteCounter = () => {
        setCounter(counter - 1)
    }
    const resetCounter = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={addCounter}>+1</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={deleteCounter}>-1</button>
        </>
    )
}



CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp



