import * as React from 'react';
import './style.css';

interface DividerProps {
    barrier?: string,
}

export const Divider: React.FunctionComponent<DividerProps> = ({barrier}) => {
    return <div className="divider">{barrier}</div>;
}

Divider.defaultProps = {
    barrier: '...',
}
