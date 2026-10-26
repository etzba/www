const BuiltInGolangTemplatesFunctions = {
  titles: ["Function", "Syntax", "Description"],
  items: [
    {
      name: "makeAnySlice",
      syntax: "{{ $slice := makeAnySlice }}",
      description:
        "Create a slice (array) of interfaces. Any type in this array is accepted. It can be a mix of integers and strings for example",
    },
    {
      name: "makeIntSlice",
      syntax: "{{ $slice := makeIntSlice 1 2 3 4 }}",
      description:
        "Make a slice of integers. Add all integers to the slice. If you want to create it faster, use makeIntSliceBySum",
    },
    {
      name: "makeIntSliceBySum",
      syntax: "{{ $slice := makeIntSliceBySum 250 }}",
      description:
        "Create a slice in the length of the sum that is added. In this example the slice would be 0 - 249 integers",
    },
    {
      name: "getUuid",
      syntax: "{{ $id := getUuid }}",
      description: "Get random uuid string",
    },
    {
      name: "getIntInRange",
      syntax: "{{ $num := getIntInRange 20 5 }}",
      description:
        "Get randon integer in range between maximum to minimum (func max min)",
    },
    {
      name: "getFloatInRange",
      syntax: "{{ $num := getFloatInRange 2 0 }}",
      description: "Get a random float in range (func max min)",
    },
    {
      name: "getRandStringInLength",
      syntax: "{{ $str := getRandStringInLength 5 }}",
      description: "Get a random string in length of an integer (func int)",
    },
  ],
};

const BuiltInEnvironmentVariables = {
  titles: ["Environmet Variable", "Description"],
  items: [
    {
      name: "ETZBA_ACTIVATION_KEY",
      description: "Set etzba activation key as a string",
    },
    {
      name: "ETZBA_API_REQUEST_TIMEOUT",
      description: "When running api or file load test execution, this variable will define a request timeout for a request. If the server won't respond, etz will drop the request.",
    },
    {
      name: "ETZBA_SQL_QUERY_TIMEOUT",
      description: "When running pg command, this environment will set the query timeout in case the query is taking too long.",
    },
    {
      name: "ETZBA_POSTGRES_USER",
      description: "Postgres user to authenticate to a postgres database",
    },
    {
      name: "ETZBA_POSTGRES_PASSWORD",
      description: "Password for postgres user that connects to a database service",
    },
    {
      name: "ETZBA_POSTGRES_DB",
      description: "A database name when user is connecting to a postgres database",
    },
    {
      name: "ETZBA_POSTGRES_HOST",
      description: "Hostname for postgres database. The default value will be localhost",
    },
    {
      name: "ETZBA_POSTGRES_PORT",
      description: "The port number used by postgres service. The default value is 5432",
    },
    {
      name: "ETZBA_API_AUTH_METHOD",
      description: "This is the Authorization method of an api request. For example, it can be Bearer (for Bearer token authentication)",
    },
    {
      name: "ETZBA_API_TOKEN",
      description: "Together with ETZBA_API_AUTH_METHOD, this is the value of the api token or password.",
    },
  ],
};

export { BuiltInGolangTemplatesFunctions, BuiltInEnvironmentVariables };
