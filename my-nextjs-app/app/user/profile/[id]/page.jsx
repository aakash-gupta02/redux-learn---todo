"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const idbased = () => {
    const {id} = useParams()
  return (
    <div>idbased
        <h1>{id}</h1>
    </div>
  )
}

export default idbased