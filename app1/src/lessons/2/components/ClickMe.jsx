import { Component } from "react";

class ClickMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <table>
          <HeaderRow />
          <ClickCountButtonOnClickBind init_clicks={5} />
          <ClickCountConstructorBind init_clicks={5} />
          <ClickCountButtonArrowFunction init_clicks={5} />
          <ClickCountClickArrowFunction init_clicks={5} />
          <ClickCountNoAccountForReactRepeatProtection init_clicks={5} />
          <ClickCountAccountForReactRepeatProtection init_clicks={5} />
        </table>
      </>
    );
  }
}

class HeaderRow extends Component {
  render() {
    return (
      <tr>
        <th>button</th>
        <th>content</th>
        <th>description</th>
      </tr>
    );
  }
}

class ClickCountButtonOnClickBind extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick.bind(this)}>
            Click Me
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>
        <td align="left">
          <em>
            (getting <code>this</code> to work inside <code>onClick</code>:
            button level bind)
          </em>
        </td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountConstructorBind extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
    this.addClick = this.addClick.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick}>
            Click me
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>

        <td align="left">
          <em>
            (getting <code>this</code> to work inside <code>onClick</code>:
            constructor level bind)
          </em>
        </td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountButtonArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={() => this.addClick()}>
            Click me
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>

        <td align="left">
          <em>
            (getting <code>this</code> to work inside <code>onClick</code>:
            button level arrow function)
          </em>
        </td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountClickArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick}>
            Click me
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>

        <td align="left">
          <em>
            (getting <code>this</code> to work inside <code>onClick</code>:
            class level arrow function)
          </em>
        </td>
      </tr>
    );
  }
  addClick = () => {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  };
}

class ClickCountNoAccountForReactRepeatProtection extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
    this.addClickX2 = this.addClickX2.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClickX2}>
            Click x2
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>
        <td align="left">
          <em>
            (multiple calls to <code>addClick</code> without account for react
            counter repeat protection)
          </em>
        </td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
  addClickX2() {
    this.addClick();
    this.addClick();
  }
}
class ClickCountAccountForReactRepeatProtection extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
    this.addClickX2 = this.addClickX2.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClickX2}>
            Click x2
          </button>
        </td>
        <td>clicks [{this.state.num_clicks}]</td>
        <td align="left">
          <em>
            (multiple calls to <code>addClick</code> with account for react
            counter repeat protection)
          </em>
        </td>
      </tr>
    );
  }
  addClick() {
    this.setState((prevState) => ({ num_clicks: prevState.num_clicks + 1 }));
  }
  addClickX2() {
    this.addClick();
    this.addClick();
  }
}

export default ClickMe;
