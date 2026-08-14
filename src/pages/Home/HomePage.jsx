import React from "react";
import { SmallLinkBox } from "../../components/LinkBox";
import "../../styles/home.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>etz</h1>
          <br></br>
          <p>Know how your service function under stress</p>
          <div className="hero-button">
            <SmallLinkBox
              title="Learn to use etz"
              path="/docs/"
              className="small-box-link"
            />
          </div>
        </div>
        <div className="slide">
          <h3>
            You are working on a new feature and can't test your product locally before commit?
          </h3>
          <p>
            etz run from your terminal and can test on any given URL or by running your service locally
          </p>
          <h3>
            Wonder why your app passes all tests in CI but struggles under load
            in production?
          </h3>
          <p>
            etz is a load testing CLI tool that integrate in your CI and help
            finding out program performance degradation
          </p>
          <h3>
            You wanted to write a simple API load test but your AI agent gave
            you a very long output to review?
          </h3>
          <p>
            With etz you can simplify your testing by writing yaml file or run
            it directly from you command line with few arguments
          </p>
          <h3>
            Can't figure out how many Kubernetes resources you need to give to
            your customer deployments before going to production?
          </h3>
          <p>
            etz can strech your service to the maximum and bomb the shit out of
            it to help you set the required amount of replicas, cpu and memory in production
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
