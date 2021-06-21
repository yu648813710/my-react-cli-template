import React, { useEffect } from 'react'
import styles from './index.less'


export default () => {
  useEffect(() => {
    console.log(GLOBAL_ENV)
  }, [])

  return (
    <div className={styles.App}>
      <div className={styles.bottom}>
        <div className={styles.bottomTop} />
      </div>
      <p>asd</p>
    </div>)
}
