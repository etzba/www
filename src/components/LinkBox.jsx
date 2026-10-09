import React from "react";
import { Link } from "react-router-dom";
import "../styles/box.css";

const DownloadLink = ({ title, file }) => {
  return (
    <>
      <a className={"small-box-link"} href={file} download="etz">
        <b>{title}</b>
      </a>
    </>
  );
};

const SmallLinkBox = ({ title, path }) => {
  return (
    <>
      <Link to={path} className={"small-box-link"}>
        <b>{title}</b>
      </Link>
    </>
  );
};

const BigLinkBox = ({ title, path }) => {
  return (
    <>
      <Link to={path} className={"big-box-link"}>
        <b>{title}</b>
      </Link>
    </>
  );
};

export { DownloadLink, SmallLinkBox, BigLinkBox };
