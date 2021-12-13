import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        setUser(user.login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>Error....</h2>
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>{user}</h2>
    </div>
  )
}
export default MultipleReturns
