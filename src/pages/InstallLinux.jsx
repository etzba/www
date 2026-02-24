import React from "react";
import etz from "../files/etzba_linux_amd64_v1/etz";
import CodeBlock from "../components/CodeBlock";

const InstallLinux = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <h2>
            Install <code>etz</code> on a Linux machine
          </h2>
          <div>
            <h4>Requirements</h4>
            <p>
              Not a long list of requirements... (It can be that you will be
              able to run it on older versions):
            </p>
            <ul>
              <li key={1}>Ubuntu 20.04+ or compatible distro</li>
              <li key={3}>
                <code>bash</code> or compatible shell
              </li>
              <li key={2}>
                <code>wget</code>(optional)
              </li>
            </ul>
            <h4>Steps</h4>
            <p>
              Download linux distribution from <a href={etz}>here</a> or use{" "}
              <code>wget</code> to download from github:
            </p>
            <CodeBlock
              code={
                "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_linux_amd64_v1/etz"
              }
            />
            <p>Move to bin directory:</p>
            <CodeBlock code={"mv etz /usr/local/bin"} />
            <p>Check from terminal that you can see the version:</p>
            <CodeBlock code={"etz version"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstallLinux;
