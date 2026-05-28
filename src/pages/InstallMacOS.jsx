import React from "react";
import CodeBlock from "../components/CodeBlock";
import etz from "../files/etzba_darwin_amd64_v1/etz";
import "../styles/layout.css";

const InstallMacOS = () => {
  return (
    <div className='page'>
      {/* macOS Section */}
      <section className="section">
        <h2>
          Install <code>etz</code> on OSX
        </h2>
        <div>
          <h4>Requirements</h4>
          <p>Again... Not a long list of requirements:</p>
          <ul>
            <li key={1}>
              <code>bash</code> or compatible shell
            </li>
            <li key={2}>
              <code>wget</code>(optional)
            </li>
          </ul>
          <h4>Steps</h4>
          <div>
            <p>
              Download linux distribution from <a href={etz}>here</a> or use{" "}
              <code>wget</code> to download from github:
            </p>
            <CodeBlock
              code={
                "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_darwin_amd64_v1/etz"
              }
            />
            <p>Move to bin directory:</p>
            <CodeBlock code={"mv etz /usr/local/bin"} />
            <p>Check from terminal that you can see the version:</p>
            <CodeBlock code={"etz version"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstallMacOS;
