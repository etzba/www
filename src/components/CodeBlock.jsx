import React from 'react';
import '../styles/code.css';

const CodeBlock = ({text, code}) => {
    return (
        <div>
            <p>{text}</p>
            <div className="code-container">
                <pre className="code-snippet">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}

export default CodeBlock