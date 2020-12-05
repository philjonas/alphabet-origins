import * as React from 'react';
import Divider from '../Divider/index';
import LogogramBox from '../LogogramBox/index';
import './style.css';
import { LogogramType } from '../../store/types'

export const EtymologyCard: React.FunctionComponent<LogogramType> = (props) => {
    const { hieroglyph, phoenician, greek, latin, meaning } = props;
    return <div className="logo-container">
        <div className="letter-container">
            <LogogramBox symbol={hieroglyph} legend="egyptian" isSmaller />
            <Divider />
            <LogogramBox symbol={phoenician} legend="phoenician" />
            <Divider />
            <LogogramBox symbol={greek} legend="greek" />
            {latin && <Divider />}
            {latin && <LogogramBox symbol={latin} legend="latin" />}
        </div>
        <h2 className="letter-meaning">{meaning}</h2>
    </div>;
}

EtymologyCard.defaultProps = {
    hieroglyph: '𓃾',
    phoenician: '𐤀',
    greek: 'Αα',
    latin: 'Aa',
    meaning: 'ox, head of cattle',
}