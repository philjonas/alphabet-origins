export interface LogogramType {
    id?: number
    phoenician?: string
    meaning?: string
    hieroglyph?: string
    greek?: string
    latin?: string | null
}

export interface StateType {
    logograms: LogogramType[]
    id: number
    letterMappings: Record<string, number>
    search: string
}

export interface ActionType {
    type: string
    payload: Object
}

export interface ParamType {
    id?: string
}

export enum Language {
    LATIN = 'latin',
    GREEK = 'greek',
    PHOEN = 'phoenician',
    HIERO = 'hieroglyph'
}