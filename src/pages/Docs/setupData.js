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
      description: "Map of strings that will be added as http request headers.",
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

const SqlParametersTableData = {
  titles: ["Parameter", "Description", "Type"],
  items: [
    {
      name: "command",
      type: "str",
      description:
        "SQL command to run as part of a query. These could be SELECT, UPDATE, DELETE or INSERT.",
    },
    {
      name: "constraint",
      type: "str",
      description:
        "SQL query constraint is a part of the WHERE clause inside a query. It lets you filter the data by a rule defined here. Note the example above to see how to create this string.",
    },
    {
      name: "query",
      type: "str",
      description: "SQL query as a string. Check the example above to see how it is done.",
    },
    {
      name: "table",
      type: "str",
      description: "SQL table name inside the database.",
    },
    {
      name: "values",
      type: "map",
      description:
        "These are the values used by INSERT and UPDATE queries. Note the example above. If you'd like to add multiple value update or insert, go to the advance section and use yaml functions. If it is required to update multiple values in the same query, you can use the query or file fields instead.",
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

export {
  APIParametersTableData,
  SqlParametersTableData,
  FileUploadParametersTableData,
};
