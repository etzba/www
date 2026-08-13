import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LeftBottomArrow, RightBottomArrow } from "./Arrows";
import "../styles/docs.css";

const GuideLinks = ({
  intrestsLinks,
  backTitle,
  backLink,
  forwardTitle,
  forwardLink,
}) => {
  return (
    <>
      <h3>What's next</h3>
      <p>
        Continue exploring <code>etz</code>:
      </p>
      <ul>
        {intrestsLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.path} key={item.id} className={"docs-link"}>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <br></br>
      {!backTitle ? (
        <></>
      ) : (
        <Link className={"left-bottom-link"} to={backLink}>
          <LeftBottomArrow />
          <span>{backTitle}</span>
        </Link>
      )}
      {!forwardTitle ? (
        <></>
      ) : (
        <Link className={"right-bottom-link"} to={forwardLink}>
          <span>{forwardTitle}</span>
          <RightBottomArrow />
        </Link>
      )}
    </>
  );
};

export default GuideLinks;