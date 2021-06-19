import React, { useEffect } from 'react'
import List from './components/list'
import * as spritejs from 'spritejs'
import styles from './index.less'

import img1 from './../assets/img/1.png'
import img3 from './../assets/img/3.png'
import img2 from './../assets/img/2.png'
import img4 from './../assets/img/4.png'
import img5 from './../assets/img/5.png'
import img6 from './../assets/img/6.png'

export default () => {
  // 初始画布
  const initCanvas = () => {
    const { Scene, Arc } = spritejs
    const container = document.getElementById('bottom')
    const scene = new Scene({
      container,
      width: 1200,
      height: 600,
    })
    const layer = scene.layer()

    const fan = new Arc({
      pos: [300, 300],
      radius: 100,
      startAngle: 0,
      endAngle: 120,
      fillColor: 'red',
    })
    layer.append(fan)

    const fan2 = fan.cloneNode()
    fan2.attr({
      pos: [300, 150],
      closeType: 'sector',
    })

    layer.append(fan2)
  }


  useEffect(() => {
    console.log(GLOBAL_ENV)

    initCanvas()
  }, [])

  return (
    <div className={styles.App}>
      {
        [img1, img2, img3, img4, img5, img6].map((res) => <List src={res} key={res} />)
      }
      <div className={styles.bottom} id="bottom">
        <div className={styles.bottomTop} />
      </div>
      <p>asd</p>
    </div>)
}
