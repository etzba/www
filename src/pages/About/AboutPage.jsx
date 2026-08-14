import React from "react";
import InfoBlock from "../../components/InfoBlock";

const AboutPage = () => {
  return (
    <>
      <div className="docs">
        <h1>About etzba</h1>
        <p>
          Hi! My name is Nadav and I made this website and the products that
          provided here.
        </p>
        <p>
          As part of my devops and cloud engineering journey, I decided to
          create etzba. etzba is a collection of devops tools, some open source
          and some closed source. These tools dedicated to improve CI\CD
          (Continuous Integration and Continuous Deployment) process and join in
          addition to the current cicle of development and release, until it is
          shipped to production and back to development.
        </p>
        <p>
          I decided to name it etzba as the first tool <code>etz</code> CLI
          meant to measure a service performance and point a finger on issues
          that might arise when you increase the load on the application. I
          created this load testing tool, so I can adjust load tests with a
          simple yaml, so it will be easier to replace other load testing tools
          that require most of the time further scripting, while everything seem
          to be good enough to write as a simple yaml and if some complexity is
          required - I can integrate golang template into the yaml. Every devops
          engineer, developer, QA or testing engineer can use it easily.
        </p>
        <InfoBlock
          preText={
            "The word etzba in Hebrew, used as a measurement unit in biblical times and also means a pointing finger."
          }
        />
        <p>
          More devops tools created to deal with some missing parts that require
          automation inside kubernetes clusters, but it is also dedicated for
          deploying <code>etz</code> CLI easily and create a whole stack of
          testing that fit right in CI. It was made to solve some issues I saw
          while deploying to kubernetes in production or in testing
          environments. These tools help you with some tasks that require
          usually development efforts or special automation efforts.
        </p>
        <p>
          If you find it interesting and would like to contact me for a fix,
          feature or update for these tools or even to integrate it in your
          environment, I would be happy to do so. Please write an email to
          support@etzba.com and keep in touch ;) .
        </p>
      </div>
    </>
  );
};

export default AboutPage;
