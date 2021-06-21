interface ListItem {
    id: number,
    value: string,
    complete: boolean,
    isShow: boolean
}

// interface 和 type的区别
export type InitData = {
    listData: ListItem[],
}

// 泛型
export interface ActionType<T> {
    key: string,
    value: T,
}
