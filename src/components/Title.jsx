import React from "react";

const Title = ({ text }) => {
  return (
    <span
      style={{
        whiteSpace: "pre-line",
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {text}
    </span>
  );
};

export { Title }