import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { EtymologyCard } from '../EtymologyCard'
import { HieroglyphicsHeader } from '../HieroglyphicsHeader'
import { LogogramType, ParamType, StateType } from '../../store/types'
import { setId } from "../../store/actions";

const mapDispatchToProps = {
    setId
}

const mapStateToProps = (state: StateType) => {
    const { id, logograms } = state
    return { logo: logograms.find(x => x.id === id) }
}

export const EtymologyPageTemplate = ({ logo, setId }: { logo?: LogogramType, setId: any }) => {
    let { id }: ParamType = useParams()
    const idNumber = id ? parseInt(id) : -1
    useEffect(() => {
        setId(idNumber)
    });

    return (
        <div>
            <HieroglyphicsHeader />
            <EtymologyCard {...logo} />
        </div>

    );
}

export const EtymologyPage = connect(mapStateToProps, mapDispatchToProps)(EtymologyPageTemplate);