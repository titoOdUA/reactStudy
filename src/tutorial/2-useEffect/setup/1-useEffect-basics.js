import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
  }

  useEffect(() => {
    console.log('call use effect')
    if (value > 0) {
      document.title = `New messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('Hello world')
  }, [])

  console.log('re-render')

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        click it!
      </button>
    </>
  )
}

export default UseEffectBasics
