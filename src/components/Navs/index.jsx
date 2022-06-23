import React, { useCallback, useEffect, useState } from "react";
import { CMenu, Icon } from 'cloud-react'
import { Link } from 'react-router-dom'
import { initRouter, authRouter } from './options'

const { SubMenu, Item } = CMenu

const Nav = () => {
  const [routerData, setRouter] = useState(initRouter)
  
  const mockData = useCallback(() => {
    return new Promise((res) => {
      setTimeout(() => {
        return res(authRouter)
      }, 300)
    })
  }, [])

  const renderRouter = (data) => {
    return (data.map(res => {
      if (res.children) {
        return (
          <SubMenu key={res.key} icon={<Icon type={res.icon} />} title={res.name}>
            {renderRouter(res.children)}
          </SubMenu>
        )
      }
      return (<Item key={res.key} icon={<Icon type={res.icon} />}>
        <Link to={res.path}>{res.name}</Link>
      </Item>);
    }))
  }

  useEffect(() => {
    mockData().then(res => {
      setRouter([
        ...routerData,
        ...res,
      ])
    })
  }, [mockData])

  return (
    <CMenu mode="inline" theme="dark">
      {renderRouter(routerData)}
    </CMenu>
  )
}

export default Nav;