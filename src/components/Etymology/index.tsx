import * as React from 'react';
import Divider from '../Divider/index';
import LogogramBox from '../LogogramBox/index';
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
            <LogogramBox symbol={props.egyptian} legend="egyptian" isSmaller/>
            <Divider />
            <LogogramBox symbol={props.phoenician} legend="phoenician" />
            <Divider />
            <LogogramBox symbol={props.greek} legend="greek" />
            <Divider />
            <LogogramBox symbol={props.latin} legend="latin" />
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