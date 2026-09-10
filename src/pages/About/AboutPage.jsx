import React from "react";
import InfoBlock from "../../components/InfoBlock";
import "../../styles/about.css";
import "../../styles/info.css";

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <h1>About etzba</h1>
        <p>
          Hi! My name is Nadav and I made this website and the products that are
          provided here.
        </p>
        <p>
          It all started with a load testing tool I created from curiosity, as
          part of my devops and cloud engineering journey, aiming to add it as
          part of a product development cycle. I decided to call it etzba and
          extend it to a collection of devops tools, open and closed source
          tools.{" "}
        </p>{" "}
        <InfoBlock
          className="info"
          preText={
            "The word etzba in Hebrew, used as a measurement unit in biblical times and also means a pointing finger."
          }
        />
        <p>
          {" "}
          All of the tools here aim to improve CI\CD (Continuous Integration and
          Continuous Deployment) process and join in addition to the current
          cycle of development and release, until it is shipped to production
          and back to development.
        </p>
        <p>
          The first tool <code>etz</code> CLI, was meant to measure a service's
          performance and point a finger at issues that might arise when you
          increase the load on the application. I wanted to use a simple command
          line tool with an option to add YAML files to any load test I'm
          running. Every devops engineer, developer, QA or testing engineer can
          use it easily.
        </p>
        <p>
          More devops tools were created to deal with some missing parts that
          require automation inside kubernetes clusters, but it is also
          dedicated for deploying <code>etz</code> CLI easily and creating a
          whole stack of testing that fits right into CI. It was made to solve
          some issues I saw while deploying to kubernetes in production or in
          testing environments.
        </p>
        <p>
          If you find it interesting and would like to contact me for a fix,
          feature or update for these tools or even to integrate it in your
          environment, I would be happy to do so. Please write an email to
          support@etzba.com and keep in touch ;) .
        </p>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AboutPage;
