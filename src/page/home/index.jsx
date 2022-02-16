import React, { useEffect } from 'react'
import List from '@components/list'
import { getRechargeTableData } from '@servers'
import styles from './index.less'

import img1 from '@assets/img/1.png'

export default () => {
  useEffect(() => {
    console.log(GLOBAL_ENV)
    getRechargeTableData({
      pageNum: 1,
      pageSize: 20,
    })
  }, [])

  return (
    <div className={styles.App}>
      <List data={[img1]} />
    </div>)
}
