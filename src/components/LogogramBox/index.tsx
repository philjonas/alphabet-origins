import * as React from 'react';
import './style.css';

interface LogogramBoxProps {
    symbol?: string,
    legend?: string,
    isSmaller?:boolean,
}

const LogogramBox: React.FunctionComponent<LogogramBoxProps> = (props) => {
    return <div className="container-logogram">
        <div className={props.isSmaller ? "smaller-symbol":"symbol"}>{props.symbol}</div>
        <div className="legend">{props.legend}</div>
    </div>;
}

export default LogogramBox;