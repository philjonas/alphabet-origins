import * as React from 'react';
import './style.css';

interface DividerProps {
    barrier?: string,
}

export const Divider: React.FunctionComponent<DividerProps> = (props) => {
    return <div className="divider">{props.barrier}</div>;
}

Divider.defaultProps = {
    barrier: '...',
}
