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

const translateText = (languageKey: Language, results: number[], logograms: LogogramType[]): string => {
    let payload = ""
    results.forEach(result => {
        if (languageKey === Language.PHOEN || languageKey === Language.HIERO) {
            payload += logograms.find(x => x.id === result)![languageKey]
        } else {
            payload += logograms.find(x => x.id === result)![languageKey]![0]
        }
    })
    return payload
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
        const searchList = searchTerm.split('')
        searchList.forEach((letter: string) => {
            Object.entries(letterMappings).find(
                ([key, value]) => { if (key === letter) results.push(value) }
            )
        });
        setSearchResults(results)
    }, [searchTerm, letterMappings])

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <p>{translateText(Language.LATIN, searchResults, logograms)}</p>
            <p>{translateText(Language.GREEK, searchResults, logograms)}</p>
            <p>{translateText(Language.PHOEN, searchResults, logograms)}</p>
            <p>{translateText(Language.HIERO, searchResults, logograms)}</p>
        </div>
    );
};

export const WriteHieroglyphics = connect(mapStateToProps)(WriteHieroglyphicsTemplate);