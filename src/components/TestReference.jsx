import React, { useRef, useState } from 'react'

const TestReference = () => {

    const text = useRef()

    const clickHandler = () => {

        console.log(text.current.value)
    }

    return (
        <div>

            <input type='text' ref={text} />
            <button onClick={clickHandler}>click kon</button>

        </div>
    )
}

export default TestReference
