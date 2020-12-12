import React, { useEffect, useState } from "react";
import { StateType } from '../../store/types'
import { connect } from "react-redux";
import './style.css';

const mapStateToProps = (state: StateType) => {
    const { letterMappings } = state
    // letterMappings: Record<string, number>
    return { letterMappings }
}

export const WriteHieroglyphicsTemplate = ({ letterMappings }: { letterMappings: Record<string, number> }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const s: string[] = []
    const [searchResults, setSearchResults] = useState(s);
    const handleChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        const target = (event as InputEvent).target
        if (!target) return
        const value = (target as any).value
        setSearchTerm(value);
    };
    useEffect(() => {
        // const results: string[] = letterMappings.filter((person) =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
        //console.log(key, value)
        const results : number[] = []
        Object.entries(letterMappings).forEach(
            ([key, value]) => {
                if (searchTerm.includes(key)) results.push(value)
            }
        )
        console.log(results)
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export const WriteHieroglyphics = connect(mapStateToProps)(WriteHieroglyphicsTemplate);