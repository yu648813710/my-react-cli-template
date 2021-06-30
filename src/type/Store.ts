import React from "react";
import { ShowType } from "./Filter"
import { ListData } from "./List"


// interface 和 type的区别
export type InitData = {
    listData: ListData,
    idIteration: number,
    showType: ShowType
}

type ListDataKey = keyof InitData

// 泛型
export interface ActionType {
    key: ListDataKey,
    value: InitData[ListDataKey],
}


export type ActionStore = (state: InitData, type:ActionType) => InitData

export interface ContextType {
    initData: InitData,
    dispatch: React.Dispatch<ActionType>
}