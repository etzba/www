const SubCommandsTableData = {
  titles: ["Sub-Command", "Description"],
  items: [
    {
      name: "api",
      description:
        "Run a load test against http REST API service. This command requires several arguments in addition and execute http requests to a certain url and method. Additionally, you can add headers and payload to the request",
    },
    {
      name: "pg",
      description:
        "This command is dedicated for measuring sql queries duration to a postgres service. Additional arguments and execution file is required for this command to work.",
    },
    {
      name: "file",
      description:
        "Upload files to an http service using multipart http requests. Note that for large files and more workers additional bandwidth is needed on your physical device.",
    },
  ],
};

const ArgumentsTableData = {
  titles: ["Argument", "Description", "Type", "Commands"],
  items: [
    {
      name: "--auth  -a",
      description: "Set authentication file to provide credentials for postgres or remote api server. The yaml file structure example could be found in advance topics.",
      type: "str",
      command: "all",
    },
    {
      name: "--config  -c",
      description: "When using etz without subcommand, a general config file in yaml needs to be given while running the command. This argument is required if no sub command is used.",
      type: "str",
      command: "none",
    },
    {
      name: "--duration  -d",
      description:
        "Set the load test job duration. This argument will define for how long the load test should run.",
      type: "time",
      command: "all",
    },
    {
      name: "--exec  -e",
      description: "Execution file path is the location of the yaml file used for the execution. This argument is required with any sub-command.",
      type: "str",
      command: "all",
    },
    {
      name: "--payload  -j",
      description: "Set json payload to api execution. This argument is available only for api (restAPI) executions.",
      type: "str",
      command: "api",
    },
    {
      name: "--method  -m",
      description: "Using api or file sub-commands, method is part of the http requests sent to the remote server. Available methods are GET, POST, PUT and other http methods. This argument is not case sensitive.",
      type: "str",
      command: "api,file",
    },
    {
      name: "--output  -o",
      description: "Create a results json file with all the load tests results. If absolute path is not provided, the file will be created relatively to where etz is executed.",
      type: "str",
      command: "all",
    },
    {
      name: "--path  -p",
      description: "Available only for file execution, path is the linux directory where all the files that will be sent to the remote server.",
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
        "Available while using api or file sub-commands only, the url will be a part of the http request. You can specify url to run load tests against any specified url.",
      type: "str",
      command: "api,file",
    },
    {
      name: "--verbose  -v",
      description:
        "Verbose will increase the stdout from any worker executing a task and let you know which worker executed which task. Warning: This argument will increase the output in terminal according to the amount of tasks executed by the workers and rps arguments.",
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

export { SubCommandsTableData, ArgumentsTableData }