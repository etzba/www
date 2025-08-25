import React from 'react';
import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import '../styles/layout.css';

const SimpleExec = () => {
  return (
    <div className='home'>
      <div className='container'>
        <section className='section'>
          <h2>
            Simple <code>etz</code> run with an exectuion file
          </h2>
          <p>
            In this section we will create a simple execution file for <code>api</code> sub-command. The same can be done with <code>pg</code> and <code>file</code> executions as well.
            To use more advanced execution files go to:
          </p>
          <Link to="/config/executions">
            <p>Confgire executions file for <code>etz</code></p>
          </Link>
          <div>
            {codeBlocks.map((item, index) =>
              <CodeBlock key={index} text={item.text} code={item.code} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

const codeBlocks = [
  {
    text: "etz can use execution or config file to build extended test cases. An example of a simple yaml execution file:",
    code: `api:
- url: http://localhost:8080/
  method: POST
  payload:
    prop1: "etz"
    prop2: "etzba etz"`,
  },
  {
    text: "And run it from terminal:",
    code: `etz api --exec=path/to/executions.yaml`,
  },
]

export default SimpleExec;