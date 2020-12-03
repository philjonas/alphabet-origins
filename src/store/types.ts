export interface LogogramType {
    id?: number;
    phoenician?: string;
    meaning?: string;
    hieroglyph?: string;
    greek?: string;
    latin?: string | null;
}

export interface StateType {
    logograms: LogogramType[];
    id: number;
}

export interface ActionType {
    type: string;
    payload: Object;
}

export interface ParamType {
    id?: string;
}