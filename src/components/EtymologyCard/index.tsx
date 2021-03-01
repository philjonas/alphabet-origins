import * as React from 'react';
import {Divider} from '../Divider/index';
import {LogogramBox} from '../LogogramBox/index';
import './style.css';
import { LogogramType } from '../../store/types'

const capitalise = (text?: string): string => text ? text[0].toUpperCase() +
    text.slice(1) : ''
export const EtymologyCard: React.FunctionComponent<LogogramType> = ({ hieroglyph, phoenician, greek, latin, meaning }) => {
    return <div className="logo-container">
        <div className="letter-container">
            <LogogramBox symbol={hieroglyph} legend="Egyptian" isSmaller />
            <Divider />
            <LogogramBox symbol={phoenician} legend="Phoenician" />
            <Divider />
            <LogogramBox symbol={greek} legend="Greek" />
            {latin && <Divider />}
            {latin && <LogogramBox symbol={latin} legend="Latin" />}
        </div>
        <h2 className="letter-meaning">{capitalise(meaning)}</h2>
    </div>;
}

EtymologyCard.defaultProps = {
    hieroglyph: '𓃾',
    phoenician: '𐤀',
    greek: 'Αα',
    latin: 'Aa',
    meaning: 'ox, head of cattle',
}
