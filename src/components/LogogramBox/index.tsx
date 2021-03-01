import * as React from 'react';
import './style.css';

interface LogogramBoxProps {
    symbol?: string | null,
    legend?: string,
    isSmaller?:boolean,
}

export const LogogramBox: React.FunctionComponent<LogogramBoxProps> = ({isSmaller, symbol, legend}) => {
    return <div className="container-logogram">
        <div className={isSmaller ? "smaller-symbol":"symbol"}>{symbol}</div>
        <div className="legend">{legend}</div>
    </div>;
}
