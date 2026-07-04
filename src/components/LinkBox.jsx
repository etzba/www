import React from "react";
import { Link } from "react-router-dom";
import "../styles/box.css";

const DownloadLink = ({ title, file }) => {
  return (
    <>
      <a className={"small-box-link"} href={file} download="etz">
        {title}
      </a>
    </>
  );
};

const SmallLinkBox = ({ title, path }) => {
  return (
    <>
      <Link to={path} className={"small-box-link"}>
        {title}
      </Link>
    </>
  );
};

const BigLinkBox = ({ title, path }) => {
  return (
    <>
      <Link to={path} className={"big-box-link"}>
        {title}
      </Link>
    </>
  );
};

export { DownloadLink, SmallLinkBox, BigLinkBox };
