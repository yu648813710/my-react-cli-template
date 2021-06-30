
export enum FilterType {
    ALL = 'ALL',
    FINISHED = 'FINISHED',
    UNFINISHED = 'UNFINISHED'
}

export interface FilterProps {
    onSelect: (type: ShowType) => void,
    showType: ShowType
}

export interface FilterButtonDataItem {
    key: ShowType,
    value: string
}

export type FilterButtonData = FilterButtonDataItem[]

export type ShowType = keyof typeof FilterType