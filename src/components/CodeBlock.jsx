import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/code.css";

const CodeBlock = ({ type, code }) => {
  return (
    <div>
      <div className="code-container">
        <div className="code-title">
          <CodeTitle text={type} code={code} />
          </div>
        <pre className="code-snippet">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const CodeTitle = ({ text, code }) => {
  return (
    <div className="code-title">
      <img
        src={ text == "term" ? require("src/assets/terminal.png") : require("src/assets/yaml.png")}
        alt="Icon"
        className="code-icon"
      />
      <div className="code-title-text">{text}</div>
      <CopyToClipboard className="code-copy" text={code}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
