import React, { useEffect, useState } from "react";
import './style.css';

const people : string[] = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin",
  ];

export const WriteHieroglyphics: React.FunctionComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const s: string[] = []
    const [searchResults, setSearchResults] = useState(s);
    const handleChange = (event:React.InputHTMLAttributes<HTMLInputElement>) => {
        const target = (event as InputEvent).target
        if(!target) return
        const value = (target as any).value
        console.log(value);
        setSearchTerm(value);
    };
    useEffect(() => {
        const results: string[] = people.filter((person) =>
            person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
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
