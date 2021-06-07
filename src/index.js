import React, { useEffect } from 'react';
import List from './components/list'
import * as spritejs from "spritejs";
import styles from './index.less'

export default  () => {
  // 初始画布
  const initCanvas = () => {
    const { Scene, Arc } = spritejs;
    const container = document.getElementById("bottom");
    const scene = new Scene({
      container,
      width: 1200,
      height: 600,
    });
    const layer = scene.layer();
    
    const fan = new Arc({
      pos: [300, 300],
      radius: 100,
      startAngle: 0,
      endAngle: 120,
      fillColor: 'red',
    });
    layer.append(fan);
    
    const fan2 = fan.cloneNode();
    fan2.attr({
      pos: [300, 150],
      closeType: 'sector',
    });
    
    layer.append(fan2);
  };


  useEffect(() => {
  console.log(GLOBAL_ENV)
  initCanvas()
  }, []);

return (
    <div className={styles.App}>
      <List data={[1,2,3]}/>
      <div className={styles.bottom} id="bottom">
        <div className={styles.bottomTop}></div>
      </div>
    </div>)
}