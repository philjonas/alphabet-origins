import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { EtymologyCard } from '../EtymologyCard'
import { LogogramType, ParamType, StateType } from '../../store/types'
import { setId } from "../../store/actions";

const getLogoById = (state: StateType, id: number): LogogramType | undefined => {
    const { logograms } = state
    return logograms.find(x => x.id === id)
}

const mapDispatchToProps = {
    setId
}

const mapStateToProps = (state: StateType) => {
    const { id } = state
    const logo = getLogoById(state, id)
    return { logo }
}

export const EtymologyPageTemplate = ({ logo, setId }: { logo: LogogramType | undefined, setId: any }) => {
    let { id }: ParamType = useParams()
    const idNumber = id ? parseInt(id) : -1
    useEffect(() => {
        setId(idNumber)
    });

    return (
        <EtymologyCard {...logo} />
    );
}

export const EtymologyPage = connect(mapStateToProps, mapDispatchToProps)(EtymologyPageTemplate);