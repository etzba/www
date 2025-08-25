import React from 'react';
import CodeBlock from '../components/CodeBlock'
import '../styles/layout.css';

const RunEtz = () => {
  return (
    <div className='home'>
      <div className='container'>
        <section className='section'>
          <h2>
            Run <code>etz</code> from terminal
          </h2>
          <p>
            etz uses several sub commands: <code>api</code>, <code>pg</code> and <code>file</code>
          </p>
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
        text: "To use etz without additional load test configuration for api (change --url to your http service):",
        code: "etz api --url=http://localhost:8080/ --method=GET",
    },
    {
        text: "And you can do much more directly from terminal. Here is how to add payload, run in duration of 3 seconds with 3 workers and limit of 9 request per second:",
        code: `etz api --url=http://localhost:8080/ --method=POST -j '{"name":"Etz Ba","address":"Etzba etz 32"}' -d 3s -w 3 -r 9`,
    },
    {
        text: "There is also a possiblity to export the results to a json file:",
        code: "etz api --url=http://localhost:8080/ --method=GET --output=files/result.json",
    },
    {
        text: "The file sub-commnad can run a load test that upload files from a specific directory (on your file system) and test on your http service:",
        code: "etz file --url=http://localhost:8080/ --method=POST --path=relative/path/to/files/",
    },
]

export default RunEtz;