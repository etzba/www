const APIParametersTableData = {
  titles: ["Parameter", "Description", "Type"],
  items: [
    {
      name: "data",
      type: "map",
      description:
        "JSON payload as a map of interfaces ( map[string]interface{} ). It should be added similar to YAML map, pairs of keys and values. Find an example above.",
    },
    {
      name: "headers",
      type: "map",
      description:
        "Map of strings that will be added as http request headers.",
    },
    {
      name: "method",
      type: "str",
      description:
        "HTTP method used during the execution. Possible methods would be GET, POST, PUT, DELETE and PATCH",
    },
    {
      name: "url",
      type: "str",
      description:
        "Server URL to send http requests to. Example: https://etzba.com or http://localhost:8080",
    },
    {
      name: "payload",
      type: "str",
      description:
        "JSON payload added as a string to each request. It is similar to data field, but instead of writing a map inside the YAML, you simply write JSON as a string.",
    },
  ],
};

const FileUploadParametersTableData = {
  titles: ["Parameter", "Description", "Type"],
  items: [
    {
      name: "method",
      type: "str",
      description:
        "HTTP method used during the execution. Possible methods would be GET, POST, PUT, DELETE and PATCH",
    },
    {
      name: "url",
      type: "str",
      description:
        "Server URL to send http requests to. Example: https://etzba.com or http://localhost:8080",
    },
  ],
};

export { APIParametersTableData, FileUploadParametersTableData };
