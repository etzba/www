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
