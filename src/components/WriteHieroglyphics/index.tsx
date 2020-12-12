import React, { useEffect, useState } from "react";
import { LogogramType, StateType } from '../../store/types'
import { connect } from "react-redux";
import './style.css';

enum Language {
    LATIN = 'latin',
    GREEK = 'greek',
    PHOEN = 'phoenician',
    HIERO = 'hieroglyph'
}

const translateText = (languageKey: Language, results: number[], logograms: LogogramType[]): React.ReactNode => {
    return (results.map(result => {
        const obj = logograms.find(x => x.id === result)
        const letter = languageKey === Language.PHOEN || languageKey === Language.HIERO ? obj![languageKey] : obj![languageKey]![0]

        return <a href={`/hieroglyphics/${obj!.id}`}>{letter}</a>
    })
    )
}

const mapStateToProps = (state: StateType) => {
    const { letterMappings, logograms } = state
    return { letterMappings, logograms }
}

export const WriteHieroglyphicsTemplate = ({ letterMappings, logograms }: { letterMappings: Record<string, number>, logograms: LogogramType[] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const s: number[] = []
    const [searchResults, setSearchResults] = useState(s);
    const handleChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        const target = (event as InputEvent).target
        if (!target) return
        const value = (target as any).value
        setSearchTerm(value);
    };
    useEffect(() => {
        const results: number[] = []
        const searchList = searchTerm.toLowerCase().split('')
        searchList.forEach((letter: string) => {
            Object.entries(letterMappings).find(
                ([key, value]) => { if (key === letter) results.push(value) }
            )
        });
        setSearchResults(results)
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
            <p className="search-results">HIEROGLYPHICS: <span className="letter-zoom">{translateText(Language.HIERO, searchResults, logograms)}</span></p>
            <p className="search-results">PHOENICIAN: <span className="letter-zoom">{translateText(Language.PHOEN, searchResults, logograms)}</span></p>
            <p className="search-results">GREEK: {translateText(Language.GREEK, searchResults, logograms)}</p>
            <p className="search-results">LATIN: {translateText(Language.LATIN, searchResults, logograms)}</p>
        </div>
    );
};

export const WriteHieroglyphics = connect(mapStateToProps)(WriteHieroglyphicsTemplate);