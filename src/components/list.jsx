import React from 'react'
import { Link } from 'react-router-dom'
import './list.less'

export default function ({ data }) {
  return data.map((res, index) => (
    <p key={index}>
      <Link to="users">user</Link>
      <img src={res} />
    </p>
  ))
}
