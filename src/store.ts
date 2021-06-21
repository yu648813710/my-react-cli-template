import { useReducer } from 'react'
import { InitData, ActionType } from './type/Store'

const initData:InitData = {
  listData: [],
}

// typeof的使用 以及 keyof
const action = (state: InitData, type:ActionType<typeof initData>):InitData => {
  return {
    ...state,
    [type.key]: type.value,
  }
}

const useStore = () => {
  return useReducer(action, initData)
}

export default {
  useStore,
}
