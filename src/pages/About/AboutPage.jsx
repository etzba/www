import React from "react";

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
          As part of my devops and cloud engineering journey in IT companies, I
          decided to create etzba. etzba is a collection of devops tools, some
          open source and some closed source.
          These tools dedicated to improve CI\CD process and join in addition to
          the current cicle of development and release until it is shipped to
          production and back to development.
        </p>
        <p>
          The main tool is <code>etz</code> - It was created as I thought it
          might be nicer for me to use a load testing tool that can be adjusted
          with a simple yaml, but also extended with golang templates instead of
          other load testing tools I found a bit frustrating and too complex to use.
          Other tools can sit perfectly in kubernetes clusters and made to solve
          some issues I saw while deploying to kubernetes in production or in
          testing environments. These tools help you with some tasks that
          require usually development efforts or special automation efforts.
        </p>
        <p>
          If you find it interesting and would like to contact me to fix or update these tools or even to integrate
          it in your environment, I would be happy to do so. Please write an email to
          support@etzba.com and keep in touch ;) .
        </p>
      </div>
    </>
  );
};

export default AboutPage;
