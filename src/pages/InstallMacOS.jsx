import React from "react";
import CodeBlock from "../components/CodeBlock";
import etz from "../files/etzba_darwin_amd64_v1/etz";
import "../styles/layout.css";

const InstallMacOS = () => {
  return (
    <div className='page'>
      <section className="section">
        <h1>
          Install <code>etz</code> on OSX
        </h1>
        <div>
          <h3>Requirements</h3>
          <p>Again... Not a long list of requirements:</p>
          <ul>
            <li key={1}>
              <code>bash</code> or compatible shell
            </li>
            <li key={2}>
              <code>wget</code>(optional)
            </li>
          </ul>
        </div>
        <div>
          <h3>Steps</h3>
            <p>
              Download linux distribution from <a className={"page-link"} href={etz}>here</a> or use{" "}
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
      </section>
    </div>
  );
};

export default InstallMacOS;
