import * as React from "react";
import * as ReactDOM from "react-dom";
import OneCron from "../src";
import "./index.css";

type State = {};

class App extends React.Component<any, State> {
  state: State = {};
  handleChange(exp) {
    console.log(exp, exp.format());
  }
  render() {
    return (
      <div style={{ margin: 50 }}>
        <OneCron
          showCheckbox={true}
          lang="Chinese"
          onChange={exp => this.handleChange(exp)}
          cronExpression="0 0 2 * * ?"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
