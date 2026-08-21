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
          All started with a load testing tool I started to create from
          curiosity, as part of my devops and cloud engineering journey, aiming
          to add it in part a product development cycle. I decided to call it
          etzba and extend it to a collection of devops tools, open and closed
          source.{" "}
        </p>{" "}
        <InfoBlock
          preText={
            "The word etzba in Hebrew, used as a measurement unit in biblical times and also means a pointing finger."
          }
        />
        <p>
          {" "}
          All of these tools aim to improve CI\CD (Continuous Integration and
          Continuous Deployment) process and join in addition to the current
          cicle of development and release, until it is shipped to production
          and back to development.
        </p>
        <p>
          The first tool <code>etz</code> CLI meant to measure a service
          performance and point a finger on issues that might arise when you
          increase the load on the application. I wanted to use a simple command
          line tool with option to add YAML file to any load test I'm running.
          Every devops engineer, developer, QA or testing engineer can use it easily.
        </p>
        <p>
          More devops tools created to deal with some missing parts that require
          automation inside kubernetes clusters, but it is also dedicated for
          deploying <code>etz</code> CLI easily and create a whole stack of
          testing that fit right into CI. It was made to solve some issues I saw
          while deploying to kubernetes in production or in testing
          environments.
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
