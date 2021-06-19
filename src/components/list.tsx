import React, { useEffect } from 'react'
import './list.less'

interface ListType {
  src: string;
}

const List: React.FC<ListType> = (props) => {
  const { src } = props

  useEffect(() => {
    console.log(123)
  })

  return (
    <p>
      <img src={src} />
    </p>
  )
}

export default List
