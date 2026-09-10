import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import GuideLinks from "../../components/GuideLinks";
import OptionsTable from "../../components/Table";
import "../../styles/layout.css";
import { BuiltInGolangTemplatesFunctions } from "./advancedData";

const AdvancedConfiguration = () => {
  const back = {
    title: "Setup General config file",
    path: "/docs/setup/general",
  };
  const forward = {
    title: "Extend YAML syntax",
    path: "/docs/advanced/syntax",
  };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/setup/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Advanced Configuration</h1>
        <p>
          In this section you'll learn how to create sophisticated test cases
          with <code>etz</code> YAML execution and general config files.
        </p>
        <ul>
          <li>
            Extend YAML syntax and include identifiers and statements inside
            your YAML file
          </li>
          <li>
            Use etzba custom functions inside YAML files using golang templates
          </li>
          <li>Examples of complex YAML test cases setup</li>
          <li>
            Create additional authentication file or environment variables for
            authentication for api and postgres servers
          </li>
          <li>Use additional values files together with test cases</li>
        </ul>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const YAMLSyntax = () => {
  const back = { title: "Advanced Configuration", path: "/docs/advanced" };
  const forward = {
    title: "Using go templates",
    path: "/docs/advanced/gotmpl",
  };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Extend YAML syntax and functions</h1>
        <p>YAML files allow us to set identifiers inside a YAML file.</p>
        <h3>Variables</h3>
        <p>
          {" "}
          You can set a variable inside your YAML file using the <code>
            $
          </code>{" "}
          sign before the name of the variable and the <code>:=</code> sign and
          set the value on the right side:
        </p>
        <CodeBlock
          type="yaml"
          code={`{{ $username := "Etzli Betzli" }}
{{ $baseUrl := printf "%s" "http://localhost:8080" }}
{{ $num := 12 }}
{{ $dir := printf "%s" "assets/" }}`}
        />
        <h3>Conditional statements</h3>
        <p>
          Sometimes we need to use few conditions to run our tasks. Use the{" "}
          <code>if</code>, <code>else if</code> and <code>else</code> to create
          conditional statement inside execution file:
        </p>
        <CodeBlock
          type="yaml"
          code={`api:
{{ if eq $baseUrl "http://localhost:8080" }}
- url: {{ $baseUrl }}/locations
  method: GET
{{ else }}
- url: {{ $baseUrl }}/expenses
  method: POST
  data:
    cost: 12
    customer: EtzBa 
{{ end }}`}
        />
        <p>
          Note the syntax of this <code>if</code> statement:{" "}
          <code>{`{{ if eq $baseUrl "http://localhost:8080" }}`}</code>. First
          use <code>if</code>, then <code>eq</code> means equal (but it can also
          be <code>gt</code> \ <code>lt</code>) and a comparison between two
          values.
        </p>
        <h3>For loops</h3>
        <p>
          To create a for loop inside <code>etz</code> general config file, use
          the <code>range</code> word to range over an array:
        </p>
        <CodeBlock
          type="yaml"
          code={`scenarios:
  locations:
    api:
    {{ range 1 2 3 4 }}
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: GET
    {{ end }}`}
        />
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const UseGoTemplates = () => {
  const back = { title: "Extend YAML syntax", path: "/docs/advanced/syntax" };
  const forward = {
    title: "Advanced test cases examples",
    path: "/docs/advanced/examples",
  };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Use etzba built-in YAML functions (go templates)</h1>
        <p>
          <code>etz</code> allows you to use built in functions inside your YAML
          file:
        </p>
        <br></br>
        <OptionsTable data={BuiltInGolangTemplatesFunctions} />
        <p>
          Contact via email to request additional functions and it will be added
          to the feature list of the next releases
        </p>
        <br></br>
        <p>
          Go to the next page to view more advanced setup examples to see how to
          use these functions and other advanced configurations in{" "}
          <Link className={"docs-link"} to="/docs/advanced/examples">
            Advanced test cases examples
          </Link>
          .
        </p>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const AdvancedExamples = () => {
  const back = {
    title: "Using go templates",
    path: "/docs/advanced/gotmpl",
  };
  const forward = {
    title: "Run etz in containerized environment",
    path: "/docs/container",
  };
  const interestLinks = [
    {
      title: "Run etz with docker",
      path: "/docs/container/docker",
    },
    {
      title: "Run etz in kubernetes",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Advanced test cases examples</h1>
        <p>
          In this page, we will cover most of the documentation presented in
          this website and see some test cases setups with go templates,
          functions and extended scenarios that can turn your load test to soak,
          stress or regular performance test.
        </p>
        <h3>File upload test case example</h3>
        <p>This example shows how to use simple variables inside a YAML:</p>
        <br></br>
        <CodeBlock
          type="yaml"
          code={`{{ $baseUrl := printf "%s" "http://localhost:8080" }}
{{ $path := printf "%s" "assets/" }}

file:
- url: {{ $baseUrl }}/pics
  method: POST
  directory: {{ $path }}
- url: {{ $baseUrl }}/docs
  method: PUT
  directory: {{ $path }}`}
        />
        <br></br>
        <h3>API execution advance YAML setup</h3>
        <p>
          This example shows how to use golang built in functions inside a
          simple API execution to a localhost service running in docker.
          <br></br>
          It will set the <code>baseUrl</code> to the local host and create a
          slice by sum (slice of 10 integers), during the execution it will
          range over the slice and generate random integers and floats, to run
          api requests to a service that calculates plus, minus, division and
          multiply numbers.
        </p>
        <br></br>
        <CodeBlock
          type="yaml"
          code={`{{ $baseUrl := printf "%s" "http://localhost:8080" }}
{{ $sumSlice := makeIntSliceBySum 10 }}
api:
{{ range $sumSlice }}
  {{ $firstInt := getFloatInRange 5 10 }}
  {{ $secondInt := getFloatInRange 20 40 }}
  {{ $firstFloat := getFloatInRange 2 4 }}
  {{ $secondFloat := getFloatInRange 6 8 }}
- url: {{ $baseUrl }}/plus
  method: POST
  payload: '[{{$firstFloat}},{{$secondFloat}}]'
- url: {{ $baseUrl }}/minus
  method: POST
  payload: '[{{$firstFloat}},{{$secondInt}}]'
- url: {{ $baseUrl }}/multi
  method: POST
  payload: '[{{$firstInt}},{{$secondInt}}]'
- url: {{ $baseUrl }}/divide
  method: POST
  payload: '[{{$firstFloat}},{{$secondInt}}]'
{{ end }}`}
        />
        <br></br>
        <h3>Complex SQL statement load test</h3>
        <p>
          This is an example of how to set a load test while connecting directly
          to postgres service with authentication, then run sql queries with
          different values.
        </p>
        <br></br>
        <CodeBlock
          type="yaml"
          code={`{{ $strings := makeStrSlice "Etz" "Ba" "Etzba" "Agudal" "Amma" "Kmiza" "Zeret" }}
settings:
  config:
    workers: 10                 # number of workers during execution
    rps: 2                      # request per second during execution
    duration: 3s                # execution duration
    output: /tmp/results.json   # results output file
    verbose: true               # debug workers during execution
  auth:
    sql:
      host: localhost
      port: 5432
      database: etzba
      user: etzba
      password: Pass1234      

scenarios:
  locations:
    sql:                         # list of sql statements
    {{ range $strings }}
    - command: INSERT
      table: locations
      values: 
        name: {{ . }}
        address: {{ getRandStringInLength 21 }}
        longtitude: {{ getFloatInRange 45 65 }}
        latitude: {{ getFloatInRange -100 -80 }}
    {{ end }}
    - command: INSERT
      table: locations
      values: 
        name: {{ getRandStringInLength 5 }}
        address: {{ getRandStringInLength 23 }}
        longtitude: {{ getFloatInRange 21 35 }}
        latitude: {{ getFloatInRange -80 10 }}
  {{ if .locations }}  
  fromValues:
    sql:
    {{ range .locations }}
    - command: INSERT
      table: locations
      values:
        name: {{ .name }}
        address: {{ .address }}
        longtitude: {{ .longtitude }}
        latitude: {{ .latitude }}
    {{ end }}
  {{ end }}`}
        />
        <br></br>
        <h3>Multiple scenarios with different load</h3>
        <p>
          In this example, you can see a setup of a load test that starts from
          an easy setup, with lower amount of workers and requests per second,
          to a very high amount or rps.
        </p>
        <br></br>
        <CodeBlock
          type="yaml"
          code={`{{ $baseUrl := printf "%s" "http://localhost:8080" }}
{{ $slice := makeIntSliceBySum 100 }}

settings:                       # General setting block has lower prio
  config:
    verbose: true               # debug workers during execution    
    workers: 5
    rps: 20
    duration: 3s

scenarios:
  easy:                         # scenario name
    config:
      verbose: false   
      workers: 5
      rps: 20
      duration: 3s
      output: files/easyPg.json 
    api:
    {{ range $slice }}
    - url: {{ $baseUrl }}/location
      method: POST
      payload: '{ "name": {{ getRandStringInLength 8 }}, "address": {{ getRandStringInLength 20 }},  {{ getFloatInRange 50 60 }}, "latitude": {{ getFloatInRange -40 -20 }} }'
    - url: {{ $baseUrl }}/locations
      method: POST
      payload: '{ "name": {{ getRandStringInLength 10 }}, "address": {{ getRandStringInLength 16 }},  {{ getFloatInRange 20 40 }}, "latitude": {{ getFloatInRange -20 10 }}}'
    - url: {{ $baseUrl }}/locations
      method: POST
      data: 
        name: {{ getRandStringInLength 5 }}
        address: {{ getRandStringInLength 23 }}
        longtitude: {{ getFloatInRange 70 90 }}
        latitude: {{ getFloatInRange -80 -60 }}
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: GET
    - url: {{ $baseUrl }}/locations/
      method: GET
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: DELETE
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: PUT
      payload: '{ "name": "Etz {{ getRandStringInLength 4 }}", "address": "Etzba {{ getRandStringInLength 8 }} str. 123 12345",  "longtitude": {{ getFloatInRange 70 90 }}, "latitude": {{ getFloatInRange -80 -60 }} }'
    {{ end }}
  medium:                       # scenario name
    config:
      verbose: true  
      workers: 15
      rps: 60
      duration: 3s
      output: files/mediumPg.json 
    api:
    {{ range $slice }}
    - url: {{ $baseUrl }}/location
      method: POST
      payload: '{ "name": {{ getRandStringInLength 8 }}, "address": {{ getRandStringInLength 20 }},  {{ getFloatInRange 50 60 }}, "latitude": {{ getFloatInRange -40 -20 }} }'
    - url: {{ $baseUrl }}/locations
      method: POST
      payload: '{ "name": {{ getRandStringInLength 10 }}, "address": {{ getRandStringInLength 16 }},  {{ getFloatInRange 20 40 }}, "latitude": {{ getFloatInRange -20 10 }}}'
    - url: {{ $baseUrl }}/locations
      method: POST
      data: 
        name: {{ getRandStringInLength 5 }}
        address: {{ getRandStringInLength 23 }}
        longtitude: {{ getFloatInRange 70 90 }}
        latitude: {{ getFloatInRange -80 -60 }}
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: GET
    - url: {{ $baseUrl }}/locations/
      method: GET
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: DELETE
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: PUT
      payload: '{ "name": "Etz {{ getRandStringInLength 4 }}", "address": "Etzba {{ getRandStringInLength 8 }} str. 123 12345",  "longtitude": {{ getFloatInRange 70 90 }}, "latitude": {{ getFloatInRange -80 -60 }} }'
    {{ end }}
  hard:
    config:
      verbose: true    
      workers: 30
      rps: 120
      duration: 3s
      output: files/hardPg.json 
    api:
    {{ range $slice }}
    - url: {{ $baseUrl }}/location
      method: POST
      payload: '{ "name": {{ getRandStringInLength 8 }}, "address": {{ getRandStringInLength 20 }},  {{ getFloatInRange 50 60 }}, "latitude": {{ getFloatInRange -40 -20 }} }'
    - url: {{ $baseUrl }}/locations
      method: POST
      payload: '{ "name": {{ getRandStringInLength 10 }}, "address": {{ getRandStringInLength 16 }},  {{ getFloatInRange 20 40 }}, "latitude": {{ getFloatInRange -20 10 }}}'
    - url: {{ $baseUrl }}/locations
      method: POST
      data: 
        name: {{ getRandStringInLength 5 }}
        address: {{ getRandStringInLength 23 }}
        longtitude: {{ getFloatInRange 70 90 }}
        latitude: {{ getFloatInRange -80 -60 }}
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: GET
    - url: {{ $baseUrl }}/locations/
      method: GET
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: DELETE
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: PUT
      payload: '{ "name": "Etz {{ getRandStringInLength 4 }}", "address": "Etzba {{ getRandStringInLength 8 }} str. 123 12345",  "longtitude": {{ getFloatInRange 70 90 }}, "latitude": {{ getFloatInRange -80 -60 }} }'
    {{ end }}`}
        />
        <br></br>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

export { AdvancedConfiguration, YAMLSyntax, UseGoTemplates, AdvancedExamples };
