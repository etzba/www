import React, { useState } from 'react';

const InstallLinux = () => {
  const [showLinux, setShowLinux] = useState(true);
  const [showMac, setShowMac] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛠️ Installation</h1>

      {/* Linux Section */}
      <section style={styles.section}>
        <h2 onClick={() => setShowLinux(!showLinux)} style={styles.subheading}>
          🐧 Linux {showLinux ? '▲' : '▼'}
        </h2>
        {showLinux && (
          <div style={styles.content}>
            <h4>Requirements</h4>
            <ul>
              <li>Ubuntu 20.04+ or compatible distro</li>
              <li><code>curl</code> or <code>wget</code></li>
              <li><code>bash</code> or compatible shell</li>
            </ul>

            <h4>Steps</h4>
            <pre style={styles.code}>
{`# 1. Update your package list
sudo apt update

# 2. Install required dependencies (example)
sudo apt install -y curl git

# 3. Download the installer script
curl -fsSL https://example.com/install.sh -o install.sh

# 4. Run the installer
bash install.sh`}
            </pre>
            <p>✅ Tip: You may need to run <code>chmod +x install.sh</code> before execution.</p>
          </div>
        )}
      </section>

      {/* macOS Section */}
      <section style={styles.section}>
        <h2 onClick={() => setShowMac(!showMac)} style={styles.subheading}>
          🍏 macOS {showMac ? '▲' : '▼'}
        </h2>
        {showMac && (
          <div style={styles.content}>
            <h4>Requirements</h4>
            <ul>
              <li>macOS 12+ (Monterey or newer)</li>
              <li>Homebrew (preferred)</li>
            </ul>

            <h4>Steps</h4>
            <pre style={styles.code}>
{`# 1. Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Use Homebrew to install the package
brew install your-package-name`}
            </pre>

            <p>Or using the direct script:</p>
            <pre style={styles.code}>
{`curl -fsSL https://example.com/install.sh | bash`}
            </pre>

            <p>📝 Note: macOS may ask for permission to run unsigned scripts.</p>
          </div>
        )}
      </section>
    </div>
  );
};

// Simple inline styles (can be replaced with CSS or Tailwind)
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem'
  },
  section: {
    marginBottom: '2rem'
  },
  subheading: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#0070f3'
  },
  content: {
    marginTop: '1rem'
  },
  code: {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '6px',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap'
  }
};

export default InstallLinux;