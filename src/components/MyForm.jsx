import React, { useState } from 'react'

const MyForm = ({ aaa }) => {
    // const [myType, setMyType] = useState('')
    // const [myPrice, setMyPrice] = useState(0)
    const [myFormData, setMyFormData] = useState({ type: '', price: 0 })



    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(myType)
        // console.log(myPrice)
        console.log(myFormData)
        aaa(myFormData)
        setMyFormData({ type: '', price: 0 })

    }

    const typeChangeHandler = (e) => {
        console.log(new Date())
        //console.log(e.target.value)
        //setMyType(e.target.value)
        setMyFormData({ ...myFormData, type: e.target.value })
    }
    const priceChangeHandler = (e) => {
        //console.log(e.target.value)
        //setMyPrice(e.target.value)
        setMyFormData({ ...myFormData, price: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='cost type' onBlur={typeChangeHandler} />
                <input type='number' placeholder='cost amount' onChange={priceChangeHandler} value={myFormData.price} />
                <button>add</button>
            </form>
        </div>
    )
}

export default MyForm
