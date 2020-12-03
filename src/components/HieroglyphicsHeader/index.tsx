import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogogramType, StateType } from '../../store/types';

const mapStateToProps = (state: StateType) => {
    const { logograms } = state
    return { logograms }
}

export const HieroglyphicsTemplate = ({ logograms }: { logograms: LogogramType[] }) => {
    const logogramComponents = logograms.map(logo => {
        const linkTo = '/' + logo.id?.toString()
        return <Link to={linkTo}>{logo.hieroglyph}</Link>
    })

    return (
        <div>{logogramComponents}</div>
    );
}

export const HieroglyphicsHeader = connect(mapStateToProps)(HieroglyphicsTemplate);