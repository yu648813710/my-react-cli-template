import React, { useEffect } from 'react'
import './list.less'

export default function ({ data }) {
  useEffect(() => {
    console.log(123)
  })

  return data.map((res, index) => (
    <p key={index}>
      <img src={res} />
    </p>
  ))
}
