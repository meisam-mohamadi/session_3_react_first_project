import React, { useState } from 'react'

const MyForm = () => {
    // const [myType, setMyType] = useState('')
    // const [myPrice, setMyPrice] = useState(0)
    const [myFormData, setMyFormData] = useState({ type: '', price: 0 })

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(myType)
        // console.log(myPrice)
        console.log(myFormData)
    }

    const typeChangeHandler = (e) => {
        //console.log(e.target.value)
        //setMyType(e.target.value)
        setMyFormData({ ...myFormData, type: e.target.value })
    }
    const priceChangeHandler = (e) => {
        //console.log(e.target.value)
        //setMyPrice(e.target.value)
        setMyFormData({ price: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='cost type' onChange={typeChangeHandler} />
                <input type='number' placeholder='cost amount' onChange={priceChangeHandler} />
                <button>add</button>
            </form>
        </div>
    )
}

export default MyForm
