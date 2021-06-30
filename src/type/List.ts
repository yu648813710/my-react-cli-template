import { ShowType } from "./Filter"

type OnFun = (id: number) => void

export interface ListProps {
    listData: ListData,
    onDel: OnFun,
    onComplate: OnFun,
    showType: ShowType
}

export type ListItemProps = {
    data: ListItem,
    onDel: OnFun,
    onComplate: OnFun,
}

export interface ListItem {
    id: number,
    value: string,
    complete: boolean,
    isShow: boolean
}

export type ListData = ListItem[]