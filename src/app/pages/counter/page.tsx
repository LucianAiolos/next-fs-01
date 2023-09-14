"use client"

import { useState } from 'react'
import Link from 'next/link'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseScore = () => {
      setCount(count + 1)
    }
    const decreaseScore = () => {
      setCount(count - 1)
    }

    return(
      <div className="h-screen w-full ">
          <h2>Counter</h2>
          <div>{count}</div>
          <button onClick={increaseScore}>+</button>
          <button onClick={decreaseScore}>-</button>          
          <link rel="stylesheet" href="/" />
        </div>
    )
}

export default Counter 