import { InitData, ActionStore } from '../type/Store'
import { FilterType } from "../type/Filter"

export let initData:InitData = {
  listData: [
  ],
  idIteration: 0,
  showType: FilterType.ALL
}

// typeof的使用 以及 keyof
export const action:ActionStore = (state, type) => {

  initData = {
    ...state,
    [type.key]: type.value
  }

  return {
    ...state,
    [type.key]: type.value,
  }
}
