import * as React from 'react';
import './style.css';

interface LogogramBoxProps {
    symbol?: string | null,
    legend?: string,
    isSmaller?:boolean,
}

export const LogogramBox: React.FunctionComponent<LogogramBoxProps> = (props) => {
    return <div className="container-logogram">
        <div className={props.isSmaller ? "smaller-symbol":"symbol"}>{props.symbol}</div>
        <div className="legend">{props.legend}</div>
    </div>;
}
