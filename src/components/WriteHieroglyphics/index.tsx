import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { LogogramType, StateType } from '../../store/types'
import { setSearch } from "../../store/actions";
import './style.css';

enum Language {
    LATIN = 'latin',
    GREEK = 'greek',
    PHOEN = 'phoenician',
    HIERO = 'hieroglyph'
}

const translateText = (languageKey: Language, results: number[], logograms: LogogramType[]): React.ReactNode => {
    return (results.map((result, idx) => {
        const obj = logograms.find(x => x.id === result)
        const letter = languageKey === Language.PHOEN || languageKey === Language.HIERO ? obj![languageKey] : obj![languageKey]![0]

        return <div key={idx}><Link to={`/hieroglyphics/${obj!.id}`}>{letter}</Link></div>
    })
    )
}

const mapDispatchToProps = {
    setSearch
}

const mapStateToProps = (state: StateType) => {
    const { letterMappings, logograms, search } = state
    return { letterMappings, logograms, search }
}

export const WriteHieroglyphicsTemplate = ({ letterMappings, logograms, search, setSearch }: { letterMappings: Record<string, number>, logograms: LogogramType[], search: string, setSearch:any }) => {
    const [searchTerm, setSearchTerm] = useState(search);
    const s: number[] = []
    const [searchResults, setSearchResults] = useState(s);
    const handleChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        setSearchTerm((event as any).target.value);
    };
    const clearSearch = () => {setSearchTerm('')}
    useEffect(() => {
        const results: number[] = []
        const searchList = searchTerm.toLowerCase().split('')
        searchList.forEach((letter: string) => {
            Object.entries(letterMappings).find(
                ([key, value]) => { if (key === letter) results.push(value) }
            )
        });
        setSearchResults(results)
        setSearch(searchTerm)
    }, [searchTerm, letterMappings])

    return (
        <div className="search-container">
            <p className="disclaimer">Disclaimer: This is a fun little gimmick, not an accurate representation of how Ancient Latin, Greek, Phoenician and Egyptian Hieroglyphics were written.</p>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={clearSearch}>Clear Input</button>
            <div className="search-results">HIEROGLYPHICS: <div className="letter-zoom">{translateText(Language.HIERO, searchResults, logograms)}</div></div>
            <div className="search-results">PHOENICIAN: <div className="letter-zoom">{translateText(Language.PHOEN, searchResults, logograms)}</div></div>
            <div className="search-results">GREEK: {translateText(Language.GREEK, searchResults, logograms)}</div>
            <div className="search-results">LATIN: {translateText(Language.LATIN, searchResults, logograms)}</div>
        </div>
    );
};

export const WriteHieroglyphics = connect(mapStateToProps, mapDispatchToProps)(WriteHieroglyphicsTemplate);