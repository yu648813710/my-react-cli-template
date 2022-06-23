import React, { useCallback, useEffect, useState } from "react";
import { Button, Avatar } from "cloud-react";
import { useNavigate } from 'react-router-dom';

import styles from './index.less'

const Headers = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState(null)

  const outLogin = useCallback(() => {
    window.localStorage.clear()
    navigate('/login', {replace: true})
  }, [])
  
  useEffect(() => {
    setUserName(window.localStorage.getItem('username'))
  })
  return (<div className={styles.headers}>
    <div className={styles.title}>公用平台</div>
    <div className={styles.user}>
      <span><Avatar size="large"/>{userName}</span>
      <Button onClick={outLogin}>退出</Button>
    </div>
  </div>)
}

export default Headers;