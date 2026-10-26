import React from "react";
import { SmallLinkBox } from "../../components/LinkBox";
import "../../styles/home.css";
import CodeBlock from "../../components/CodeBlock";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <img
            src={require("src/assets/opener.png")}
            alt="Logo"
            className="home-logo"
          />
          <h1>etz</h1>
          <br></br>
          <p>Test your service performance under stress</p>
          <div className="hero-button">
            <SmallLinkBox
              title="Learn etz"
              path="/docs/"
              className="small-box-link"
            />
            <SmallLinkBox
              title="Products"
              path="/tools/"
              className="small-box-link"
            />
          </div>
        </div>
        <div className="slide">
          <h3>Simple, fast and straight to the point</h3>
          <br></br>
          <br></br>
          <div>
            <div className="code-container-home">
              <pre className="code-snippet">
                <code style={{ padding: "0 0 0 4%" }}>
                  etz api --url=https://etzba.com --method=GET --workers=30
                  --rps=150 --duration=2m
                </code>
              </pre>
            </div>
          </div>
          <br></br>
          <br></br>
          <p>Easy to create load tests, extendable with YAML for complex cases</p>
          <br></br>
        </div>
        <div>
          <video autoPlay muted loop playsInline className="video">
            <source
              src={require("../../assets/etzba.webm")}
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slide">
          <br></br>
          <h3>Fits for devops processes · Excellent for CI\CD pipelines · Always works locally</h3>
          <div className="hero-button">
            <SmallLinkBox
              title="Github"
              path="https://github.com/etzba"
              className="small-box-link"
            />
          </div>
          <p>Check out for more tools to set in your environments</p>
        </div>
        <div className="hero">
          <h3>Everything you need from a load test to find about service performance issues</h3>
          <br></br>
          <div>
            <div className="code-container-home-yaml">
              <pre className="code-snippet-home-yaml">
                <code>
                  {`api:
{{ range $slice }}
- url: {{ $baseUrl }}/locations
  method: POST
  data: 
    name: {{ getRandStringInLength 5 }}
    address: {{ getRandStringInLength 23 }}
    longitude: {{ getFloatInRange 21 90 }}
    latitude: {{ getFloatInRange -80 10 }}
  tags: ["postloc"]
{{ end }}`}
                </code>
              </pre>
            </div>
          </div>
          <br></br>
          <h4>
            Did you ever wish for a tool that is easy to set and catch product
            release issues?
          </h4>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default HomePage;
