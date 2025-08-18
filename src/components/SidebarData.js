export const SidebarData = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Installation',
    path: '/install',
    subPaths: [
        {
            title: 'Linux',
            path: '/install/linux',            
        },
        {
            title: 'macOS',
            path: '/install/osx',            
        }
    ],
  },
  {
    title: 'Getting started',
    path: '/start',
    subPaths: [
        {
            title: 'Run etz',
            path: '/start/run',            
        },
        {
            title: 'Using simple execution file',
            path: '/start/exec',            
        }
    ],
  },
  {
    title: 'Configuring Test Cases',
    path: '/config',
    subPaths: [
        {
            title: 'General configuration',
            path: '/config/general',            
        },
        {
            title: 'With execution files',
            path: '/config/executions',
                subPaths: [
                    {
                        title: 'api',
                        path: '/config/executions/api',
                    },
                    {
                        title: 'sql',
                        path: '/config/executions/sql',
                    },
                    {
                        title: 'file',
                        path: '/config/executions/file',
                    },
                ]            
        }
    ],
  },
  {
    title: 'Usage',
    path: '/usage',
    subPaths: [
        {
            title: 'Running etz with General Configuration',
            path: '/usage/general',            
        },
        {
            title: 'Running etz with Executions File',
            path: '/usage/execution',            
        },
        {
            title: 'CLI Arguments',
            path: '/usage/cli',            
        },
        {
            title: 'Usage examples',
            path: '/usage/examples',            
        },
    ],
  },
    {
    title: 'Advanced Configuration',
    path: '/advanced',
    subPaths: [
        {
            title: 'Using an Authentication File',
            path: '/advanced/auth',            
        },
        {
            title: 'Using Go Templates',
            path: '/advanced/gofunc',            
        }
    ],
  },
]

/*
Installation
    Linux
    macOS

Getting Started
    Running ETZ
    Using the Simple Execution File

Configuring Test Cases
    General Configuration
    Execution Types
        API Executions
        SQL Executions
        File Executions

Usage
    Running ETZ with General Configuration
    Running ETZ with Executions File
    CLI Arguments
    Usage Examples

Advanced Configuration
    Using an Authentication File
    Using Go Templates

1. Setup
    - Installation (Linux, macOS)
    - Authentication File

2. Configuration
    - General Config
    - Execution Files
    - Using Go Templates

3. Execution Types
    - API
    - SQL
    - File

4. Running ETZ
    - With General Config
    - With Executions File
    - CLI Arguments
    - Examples
*/