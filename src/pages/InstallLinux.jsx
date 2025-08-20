import React from 'react';
import CodeBlock from '../components/CodeBlock'

const InstallLinux = () => {
    return (
        <div className='home'>
            <div className='container'>
                <h1 className='heading'>🛠️ Installation</h1>

                {/* Linux Section */}
                <section className='section'>
                    <h2>
                        🐧 Linux
                    </h2>
                    <div>
                        <h4>Requirements</h4>
                        <ul>
                            <li key={1}>Ubuntu 20.04+ or compatible distro</li>
                            <li key={2}><code>curl</code> or <code>wget</code></li>
                            <li key={3}><code>bash</code> or compatible shell</li>
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
        </div>
    );
};

const codeBlocks = [
    {
        text: "Use wget to download etz",
        code: "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_linux_amd64_v1/etz",
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

export default InstallLinux;