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
Home
Installation
-Linux
-macOS
Getting started
-Run etz
-Using simple execution file
Configuring Test Cases
-General configuration
-Execution configurations
 -api execution
 -sql execution
 -file execution
Usage
-Running etz with General Configuration
-Running etz with Executions File
-CLI Arguments
-Usage examples
Advanced Configuration
-Using an Authentication File
-Using Go Templates

*/