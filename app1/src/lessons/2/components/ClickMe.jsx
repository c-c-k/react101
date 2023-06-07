import { Component } from "react";
import { genRandomHexColorCode } from "./utils";

class ClickMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <table>
          <HeaderRow />
          <ClickCountButtonBind init_clicks={5} />
          <ClickCountConstructorBind init_clicks={5} />
          <ClickCountButtonArrowFunction init_clicks={5} />
          <ClickCountClassArrowFunction init_clicks={5} />
          <ClickCountNoAccountForReactRepeatProtection init_clicks={5} />
          <ClickCountAccountForReactRepeatProtection init_clicks={5} />
          <ColorChangerCell fgColor="#000000" bgColor="#ffffff" />
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

class ClickCountButtonBind extends Component {
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

class ClickCountClassArrowFunction extends Component {
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

class ColorChangerCell extends Component {
  constructor(props) {
    super(props);
    this.state = { coloredWords: this.genRandomColoredWords() };
    this.setRandomColoredWords = this.setRandomColoredWords.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.setRandomColoredWords}>
            Click me
          </button>
        </td>
        <td>{this.state.coloredWords}</td>
        <td align="left">
          <em>(homework: color changing button)</em>
        </td>
      </tr>
    );
  }
  setRandomColoredWords() {
    this.setState({ coloredWords: this.genRandomColoredWords() });
  }
  genRandomColoredWords() {
    const words = ["The ", "colour ", "of ", "magic"];
    let _coloredWords = [];
    let fgColor;
    let bgColor;
    for (let word of words) {
      fgColor = genRandomHexColorCode();
      bgColor = genRandomHexColorCode();
      _coloredWords.push(
        <RandomColorWord word={word} fgColor={fgColor} bgColor={bgColor} />
      );
    }
    return _coloredWords;
  }
}

class RandomColorWord extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span
        style={{
          color: this.props.fgColor,
          backgroundColor: this.props.bgColor,
        }}
      >
        {this.props.word}
      </span>
    );
  }
}

export default ClickMe;
