import React from 'react';
import CodeBlock from '../components/CodeBlock';
import '../styles/layout.css';

const InstallMacOS = () => {
  return (
    <div className='home'>
      {/* macOS Section */}
      <section className='section'>
        <h2>
          Install <code>etz</code> on OSX
        </h2>
        <div>
          <h4>Requirements</h4>
          <ul>
            <li key={1}><code>curl</code> or <code>wget</code></li>
            <li key={2}><code>bash</code> or compatible shell</li>
          </ul>
          <h4>Steps</h4>
          <div>
            {codeBlocks.map((item, index) =>
              <CodeBlock key={index} text={item.text} code={item.code} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const codeBlocks = [
    {
        text: "Use wget to download etz",
        code: "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_darwin_amd64_v1/etz",
    },
    {
        text: "Move to bin directory",
        code: "mv etz /usr/local/bin",
    },
    {
        text: "Show version",
        code: "etz version",
    },
]

export default InstallMacOS;