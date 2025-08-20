import React from 'react';
import '../styles/code.css';

const CodeBlock = ({text, code}) => {
    return (
        <div className="container">
            <p>{text}</p>
            <div className="code">
                <pre>
                    {code}
                </pre>
            </div>
        </div>
    );
}

export default CodeBlock