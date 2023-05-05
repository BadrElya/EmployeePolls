import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const auth = useSelector(state => state.userAuth)
  const navigate = useNavigate()

  useEffect(() => {
    !auth && navigate('/login')
  }, [auth, navigate])

  return (
    <h1>404 Page not Found</h1>
  )
}

export default Error404