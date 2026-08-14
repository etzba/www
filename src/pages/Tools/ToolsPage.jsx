import React from "react";
import { SmallLinkBox } from "../../components/LinkBox";

const ToolsPage = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>etz</h1>
          <br></br>
          <p>Know how your service function under stress</p>
          <div className="hero-button">
            <SmallLinkBox
              title="Go to github repository"
              path="https://github.com/etzba/etz"
              className="small-box-link"
            />
          </div>
        </div>
        <div className="slide">
          <h1>secret-disributor</h1>
          <br></br>
          <p>The simple way to set your secrets in kubernetes cluster</p>
          <div className="hero-button">
            <SmallLinkBox
              title="Go to github repository"
              path="https://github.com/etzba/secret-distributor"
              className="small-box-link"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
