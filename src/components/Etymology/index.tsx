import * as React from 'react';
import './style.css';

interface EtymologyProps {
    egyptian?: string,
    phoenician?: string,
    greek?: string,
    latin?: string,
    meaning?: string,
}

const Etymology: React.FunctionComponent<EtymologyProps> = (props) => {
    return <div className="container">
        <div className="letter-container">
            <div className="egyptian">{props.egyptian}</div>
            <div className="latin"> &gt; </div>
            <div className="phoenician">{props.phoenician}</div>
            <div className="latin"> &gt; </div>
            <div className="greek">{props.greek}</div>
            <div className="latin"> &gt; </div>
            <div className="latin">{props.latin}</div>
        </div>
        <h2>{props.meaning}</h2>
    </div>;
}

Etymology.defaultProps = {
    egyptian: '𓃾',
    phoenician: '𐤀',
    greek: 'Αα',
    latin: 'Aa',
    meaning: 'ox, head of cattle',
}

export default Etymology;