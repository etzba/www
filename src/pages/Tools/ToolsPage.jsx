import React from "react";
import { SmallLinkBox } from "../../components/LinkBox";
import "../../styles/tools.css";

const ToolsPage = () => {
  return (
    <>
      <div className="tools">
        <div className="thero">
          <br></br>
          <h1>etz</h1>
          <br></br>
          <p>Test your service performance under stress</p>
          <div className="thero-button">
            <SmallLinkBox
              title="Go to github repository"
              path="https://github.com/etzba/etz"
              className="small-box-link"
            />
          </div>
        </div>
        <div className="tslide">
          <h1>secret-disributor</h1>
          <br></br>
          <p>The simple way to set your secrets in kubernetes cluster</p>
          <div className="thero-button">
            <SmallLinkBox
              title="Go to github repository"
              path="https://github.com/etzba/secret-distributor"
              className="small-box-link"
            />
          </div>
        </div>
        <div className="thero">
          <h1>image-updater</h1>
          <br></br>
          <p>Keep your kubernetes deployments up to date</p>
          <div className="thero-button">
            <SmallLinkBox
              title="Read the docs"
              path="https://github.com/etzba/etz"
              className="small-box-link"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
