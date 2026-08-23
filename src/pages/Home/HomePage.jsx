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
          <h3>Can't test the performance of your product before merging?</h3>
          <p>
            etz run from your terminal and can test your service locally or on
            any given URL
          </p>
          <h3>
            Wonder why your app passes all tests in CI but struggles under load
            in production?
          </h3>
          <p>
            etz is a load testing CLI tool that integrate into CI and helps to
            find performance degradation
          </p>
          <h3>You need to write a very long scripts to run a load test?</h3>
          <p>
            With etz you can simplify your tests by writing a YAML files or
            simply run it from command line
          </p>
          <h3>
            Can't figure out how many Kubernetes resources you need to give to
            your customer deployments before going to production?
          </h3>
          <p>
            etz can strech your service to the maximum and help you set the required amount of replicas, cpu and memory
            in production
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
