const SubCommandsTableData = {
  titles: ["Sub-Command", "Description"],
  items: [
    {
      name: "api",
      description:
        "Run a load test against http REST API service. This command requires several arguments in addition to executing http requests to a certain url and method. Additionally, you can add headers and payload to the request",
    },
    {
      name: "pg",
      description:
        "This command is dedicated for measuring sql queries duration to a postgres service. Additional arguments and an execution file is required for this command to work.",
    },
    {
      name: "file",
      description:
        "Upload files to an http service using multipart http requests. Note that for large files and more workers additional bandwidth is needed on your physical device.",
    },
  ],
};

const ArgumentsTableData = {
  titles: ["Argument", "Description", "Type", "Cmd"],
  items: [
    {
      name: "--auth  -a",
      description:
        "Set authentication file to provide credentials for postgres or remote api server. The yaml file structure example could be found in advanced topics.",
      type: "str",
      command: "all",
    },
    {
      name: "--config  -c",
      description:
        "When using etz without subcommand, a general config file in yaml needs to be given while running the command. This argument is required if no sub command is used.",
      type: "str",
      command: "none",
    },
    {
      name: "--duration  -d",
      description:
        "Set the load test job duration. This argument will define how long the load test should run.",
      type: "time",
      command: "all",
    },
    {
      name: "--exec  -e",
      description:
        "Execution file path is the location of the yaml file used for the execution. This argument is required with any sub-command.",
      type: "str",
      command: "all",
    },
    {
      name: "--payload  -j",
      description:
        "Set json payload to api execution. This argument is available only for api (restAPI) executions.",
      type: "str",
      command: "api",
    },
    {
      name: "--method  -m",
      description:
        "Using api or file sub-commands, the method is part of the http requests sent to the remote server. Available methods are GET, POST, PUT and other http methods. This argument is not case sensitive.",
      type: "str",
      command: "api,file",
    },
    {
      name: "--output  -o",
      description:
        "Create a results json file with all the load tests results. If the absolute path is not provided, the file will be created relative to where etz command is executed.",
      type: "str",
      command: "all",
    },
    {
      name: "--path  -p",
      description:
        "Available only for file execution, path is the linux directory where all the files that will be sent to the remote server.",
      type: "str",
      command: "file",
    },
    {
      name: "--rps  -r",
      description:
        "Request per second set the frequency of http requests or sql statements during the load test.",
      type: "int",
      command: "all",
    },
    {
      name: "--url  -u",
      description:
        "Available while using api or file sub-commands only, the url will be a part of the http request. You can specify a URL to run load tests on a given url.",
      type: "str",
      command: "api,file",
    },
    {
      name: "--verbose  -v",
      description:
        "Verbose will increase the stdout from any worker executing a task and let you know which worker executed which task. Warning: This argument will increase the output in the terminal according to the amount of tasks executed by the workers and rps arguments.",
      type: "bool",
      command: "all",
    },
    {
      name: "--workers  -w",
      description:
        "etz uses go routines to run tasks and the workers argument defines the amount of go routines used to run these tasks. Tasks could be http requests with api execution, postgres statements execution with pg command or any other task.",
      type: "int",
      command: "all",
    },
  ],
};

const LICENSE = `
LIMITED TIME PROPRIETARY SOFTWARE LICENSE

Software Name: etz
Software Version: v0.0.4
License Termination: 31/12/2027
Copyright (c) 2023 Nadav Ben Mazia (etzba)

1.0 License Grant

    Subject to the terms of this agreement, Nadav Ben Mazia ("Licensor") grants to you ("Licensee")
    a non-exclusive, non-transferable, revocable license to use etz ("Software") solely for your
    own internal, personal or business purpose.

1.1 Software purpose

    This Software is provided as a load testing tool. It is intended for use in test, staging, or 
    development environments and is expressly not designed or warranted for use in production 
    environments. The Licensor assumes no responsibility for any issues, damages, or losses resulting  
    from deployment of this Software in a production environment. Any use of the Software in production  
    is done entirely at the user's own risk.

1.2 Time Limitation (Trial)

    This license is valid only for the License Termination defined above, starting from the date of 
    installation (If before the License Termination). You are not allowed to use this program 
    after the license has been terminated.
    Upon expiration of this term, the software will automatically cease to function and your right 
    to use it will terminate immediately.

1.3 Restrictions

    You agree that you will not copy, modify or create derivative works of the software. Reverse engineer, 
    decompile, disassemble or attempt to derive the source of the code of the software.
    Redistribute, sell, rent, lease, sublicense or otherwise transfer rights to the software to
    any third party. Remove any proprietary notices, labels or copyright marks from the software.
    This restriction does not affect mandatory statutory exceptions under applicable copyright law,
    including the right of a lawful user to make a backup copy and the right to decompile the Software
    to the limited extent necessary to achieve interoperability with independently created programs.

1.4 Privacy

    This Software does not collect, store, transmit, or otherwise process any personal data or usage 
    information about its users. The Software contains no analytics, telemetry, tracking, or logging 
    functionality that records or transmits information about users or their use of the Software. 
    No user data is retained by the Licensor at any time in connection with the use of this Software.

2.1 Warranty Disclaimer

    the software is provided free of charge. the licensor gives no warranty of any kind, express or implied, 
    in particular no warranty that the software will meet the user's requirements or operate uninterrupted, 
    timely, secure or error-free. this disclaimer applies to the extent permitted under mandatory law. 
    statutory rights that cannot be excluded by agreement, in particular claims for fraudulently concealed 
    defects, remain unaffected.

2.2 Limitation of Liability

    as the software is provided free of charge, the principles governing gratuitous transactions under german 
    law apply accordingly. the licensor is therefore liable only for damages caused by intent or gross 
    negligence, for injury to life, body or health, and under the mandatory provisions of the product liability 
    law applicable at the time the software is placed on the market.
    should the gratuitous character of this license be denied in a specific case, the following applies instead. 
    for damages caused by slight negligence, the licensor is liable only if an essential contractual obligation 
    has been breached, being an obligation whose fulfilment is essential to the proper use of the software and 
    on which the user may reasonably rely. liability under this paragraph is limited to the foreseeable damage 
    typical for software of this kind.
    any further liability of the licensor is excluded to the extent permitted by law.

2.3 Consumers and Entrepreneurs

    This license applies both to natural persons acting for purposes outside their trade, business or profession 
    ("Consumers") and to persons acting in a commercial or professional capacity ("Entrepreneurs").
    For Consumers, Sections 2.1 and 2.2 apply only to the extent permitted under mandatory consumer protection law. 
    Statutory rights that cannot be excluded or limited remain unaffected.
    For Entrepreneurs, the parties agree that the allocation of risk under Sections 2.1 and 2.2 is reasonable in 
    view of the Software being provided free of charge.

3.0 Ownership

    The software is licensed, not sold. Licensor retains all right, title and interest in and to the software, 
    including intellectual property rights.

3.1 Governing Law

    This agreement shall be governed by and construed in accordance with the laws of Germany.
`

export { SubCommandsTableData, ArgumentsTableData, LICENSE };
