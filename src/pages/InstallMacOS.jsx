import React from 'react';
import '../styles/layout.css';

const InstallMacOS = () => {
  return (
    <div className='home'>
            {/* macOS Section */}
      <section className='section'>
        <h2 className='subheading'>
          🍏 macOS
        </h2>
          <div className='content'>
            <h4>Requirements</h4>
            <ul>
              <li>macOS 12+ (Monterey or newer)</li>
              <li>Homebrew (preferred)</li>
            </ul>

            <h4>Steps</h4>
            <div className='code'>
{`# 1. Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Use Homebrew to install the package
brew install your-package-name`}
            </div>

            <p>Or using the direct script:</p>
            <pre className='code'>
{`curl -fsSL https://example.com/install.sh | bash`}
            </pre>

            <p>📝 Note: macOS may ask for permission to run unsigned scripts.</p>
          </div>
      </section>
    </div>
  );
}

export default InstallMacOS;