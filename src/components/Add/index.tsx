import React, { useRef, useCallback } from 'react'
import styles from './index.less'

// 事件props
type AddTypes = {
  onAddListData: (val:string) => void
}

const Add:React.FC<AddTypes> = ({ onAddListData }) => {
  const inputDom = useRef(null)

  const addListData = useCallback(() => {
    const val = inputDom.current.value

    if(!val) return

    onAddListData(val)

    inputDom.current.value = null
  }, [inputDom ])

  return (
    <div className={styles.add}>
      <input type="text" ref={inputDom} />
      <button title="添加" onClick={addListData}>添加</button>
    </div>
  )
}

export default Add
