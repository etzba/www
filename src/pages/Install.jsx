import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

function Install() {
  return (
    <div className='page'>
      <h1>Install</h1>
      <p>
        <code>etz</code> is available on both Linux and OSX, so let's see in the
        next sections how to install it:
      </p>
      <ul>
        <li>
          <Link className={"page-link"} to="/install/linux">
            Install <code>etz</code> on a Linux machine
          </Link>
        </li>
        <li>
          <Link className={"page-link"} to="/install/linux">
            Install <code>etz</code> on OSX
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Install;
