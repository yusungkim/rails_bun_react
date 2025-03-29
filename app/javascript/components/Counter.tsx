import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button 
      className='bg-blue-500 text-white p-2 rounded'
      type='button'
      onClick={() => setCount((count) => count + 1)}
    >
      Click me! &rarr; {count}
    </button>
  )
}

export default Counter;