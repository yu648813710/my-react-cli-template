import React, { useEffect } from 'react'
import { Button } from 'cloud-react'
import List from '@components/list'
import styles from './index.less'

import img1 from '@assets/img/1.png'

export default () => {
  useEffect(() => {
    console.log(GLOBAL_ENV)
  }, [])

  return (
    <div className={styles.App}>
      <List data={[img1]} />
      <Button>123</Button>
    </div>)
}
