import React from "react";
import "../styles/code.css";

const CodeBlock = ({ code }) => {
  return (
    <div>
      <div className="code-container">
        <pre className="code-snippet">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
