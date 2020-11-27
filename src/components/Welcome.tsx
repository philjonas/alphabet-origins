import * as React from 'react'
interface WelcomeProps {
    name?: string,
}

const Welcome: React.FunctionComponent<WelcomeProps> = (props) => {
    return <h1>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
    name: 'Guest User',
}

export default Welcome;