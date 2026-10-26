import React from "react";
import "../styles/info.css";
import { Link } from "react-router-dom";

const InfoBlock = ({
  title,
  preText,
  bulletPoints,
  linkText,
  linkPath,
  postText,
}) => {
  return (
    <div className="info">
      {title && (
        <p
          style={{
            whiteSpace: "pre-line",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <b>{title}</b>
        </p>
      )}
      {preText && (
        <p
          style={{
            whiteSpace: "pre-line",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {preText}
          {linkText && (
            <span
              style={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {" "}<Link className={"docs-link"} to={linkPath}>
                {linkText}
              </Link>
            </span>
          )}
        </p>
      )}
      {bulletPoints && (
        <ul>
          {bulletPoints.map((item, index) => (
            <li key={index}>
              <span
                style={{
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
      {postText && (
        <p
          style={{
            whiteSpace: "pre-line",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {postText}
        </p>
      )}
    </div>
  );
};

export default InfoBlock;
