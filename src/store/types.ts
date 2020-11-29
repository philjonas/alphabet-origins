export interface LogoGramType {
    id: number;
    phoenician: string;
    meaning: string;
    hieroglyph: string;
    greek: string;
    latin: string | null;
}

export interface StateType {
    logograms: LogoGramType[];
}

export interface ActionType {
    type: string;
    payload: Object;
}