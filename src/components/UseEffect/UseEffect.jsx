import React, { useEffect, useState } from "react"

export const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [evenCount, setEvenCount] = useState(0)
  useEffect(() => {
    console.log("I am from useEffect")
    if (count % 2 === 0 && count !== 0) {
      setEvenCount(evenCount + 1)
    }
  }, [count])

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Add
        </button>
      </div>
      <div>
        <h1>The count is {count}</h1>
      </div>
      <div>
        <h1>The even count is {evenCount}</h1>
      </div>
    </div>
  )
}
