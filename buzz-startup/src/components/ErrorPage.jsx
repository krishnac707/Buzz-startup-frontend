import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const router = useNavigate()
  return (
    <div>
        404 Not Found
        <p onClick={()=>router("/")}>Click Here to visit home page</p>
    </div>
  )
}

