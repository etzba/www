const APIParametersTableData = {
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

export { APIParametersTableData };
