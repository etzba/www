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
      description: "Make a slice of integers. Add all integers to the slice. If you want to create it faster, use makeIntSliceBySum",
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
      description:
        "Get random uuid string",
    },
    {
      name: "getIntInRange",
      syntax: "{{ $num := getIntInRange 20 5 }}",
      description: "Get randon integer in range between maximum to minimum (func max min)",
    },
    {
      name: "getFloatInRange",
      syntax: "{{ $num := getFloatInRange 2 0 }}",
      description:
        "Get a random float in range (func max min)",
    },
    {
      name: "getRandStringInLength",
      syntax: "{{ $str := getRandStringInLength 5 }}",
      description:
        "Get a random string in length of an integer (func int)",
    },
  ],
};

export {
  BuiltInGolangTemplatesFunctions,
};
