import React from "react";
import { SmallLinkBox } from "../../components/LinkBox";
import "../../styles/home.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <img
            src={require("src/assets/etzba202608.svg")}
            alt="Logo"
            className="home-logo"
          />
          <h1>etz</h1>
          <br></br>
          <p>Test your service performance under stress</p>
          <div className="hero-button">
            <SmallLinkBox
              title="Learn"
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
          <h3>
            Wonder why your app passes all tests in CI but struggles under load
            in production?
          </h3>
          <p>
            etz is a load testing CLI tool that can run in your CI
            pipelines and find performance degradation of your app
          </p>
          <h3>You need to write a very long script to run a load test?</h3>
          <p>
            With etz you can simplify your load tests by writing a YAML file or
            run it directly from terminal
          </p>
          <h3>
            You can't figure out how many Kubernetes resources you need to give to
            your deployments before going to production?
          </h3>
          <p>
            etz can stretch your service to the maximum and help you set the
            required number of replicas, cpu and memory in production
          </p>
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
      </div>
    </>
  );
};

export default HomePage;
