import * as React from "react";
import * as ReactDOM from "react-dom";
import OneCron, { I18NEnum } from "../src";
import "./index.css";

type State = {};

class App extends React.Component<any, State> {
  state: State = {};
  handleChange(exp) {
    console.log(exp, exp.format(), exp.recent5TriggerTimes());
  }
  render() {
    return (
      <div style={{ margin: 50 }}>
        <OneCron
          showCheckbox={true}
          lang={I18NEnum.Chinese}
          onChange={exp => this.handleChange(exp)}
          cronExpression="0 0 2 * * ?"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
