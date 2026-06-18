import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import linuxBinaryFile from "../../assets/etz_linux_amd64_v1?url";
import darwinBinaryFile from "../../assets/etz_darwin_amd64_v1?url";
import "../../styles/layout.css";

const Install = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>Install</h1>
        <p>
          <code>etz</code> is available on both Linux and OSX, so let's see in
          the next sections how to install it:
        </p>
        <ul>
          <li>
            <Link className={"page-link"} to="/docs/install/linux">
              Install <code>etz</code> on a Linux machine
            </Link>
          </li>
          <li>
            <Link className={"page-link"} to="/docs/install/linux">
              Install <code>etz</code> on OSX
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
// Download linux distribution from <a className={"page-link"} href={etzLinux}>here</a> or use{" "}
const InstallLinux = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>
          Install <code>etz</code> on a Linux machine
        </h1>
        <div>
          <h3>Requirements</h3>
          <p>
            Not a long list of requirements... (It can be that you will be able
            to run it on older versions):
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
          <h3>Steps</h3>
          <p>
            Download linux distribution from{" "}
            <a className={"page-link"} href={linuxBinaryFile} download="etz">
              here
            </a>{" "}
            or use <code>wget</code> to download from github:
          </p>
          <CodeBlock
            type="term"
            code={
              "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_linux_amd64_v1/etz"
            }
          />
          <p>Move to bin directory:</p>
          <CodeBlock
            type="term"
            code={"sudo mv etz /usr/local/bin/"}
          />
          <p>Check from terminal that you can see the version:</p>
          <CodeBlock type="term" code={"etz version"} />
        </div>
      </section>
    </div>
  );
};

// Download linux distribution from <a className={"page-link"} href={etzMacOS}>here</a> or use{" "}
const InstallMacOS = () => {
  return (
    <div className="container">
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
            Download mac distribution from{" "}
            <a className={"page-link"} href={darwinBinaryFile} download="etz">
              here
            </a>{" "}
            or use or use <code>wget</code> to download from github:
          </p>
          <CodeBlock
            type="term"
            code={
              "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_darwin_amd64_v1/etz"
            }
          />
          <p>Move to bin directory:</p>
          <CodeBlock type="term" code={"sudo mv etz /usr/local/bin/"} />
          <p>Check from terminal that you can see the version:</p>
          <CodeBlock type="term" code={"etz version"} />
        </div>
      </section>
    </div>
  );
};

export { Install, InstallLinux, InstallMacOS };
