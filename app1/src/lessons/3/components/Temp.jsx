import { Component, useState } from "react";
import { validateColor } from "./utils";

export default class Temp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <table>
          <HeaderRow />
          <InputMirror />
          <InputMirrorAsFunction />
          <InputMirrorAsFunctionWithCallerPassToProps />
        <UlFromPropsWithList items={["item1", "item2", "item3"]} />
        </table>
      </>
    );
  }
}

class HeaderRow extends Component {
  render() {
    return (
      <tr>
        <th>input</th>
        <th>content</th>
        <th>description</th>
      </tr>
    );
  }
}

class InputMirror extends Component {
  constructor(props) {
    super(props);
    this.state = { mirroredText: "", mirTextColor: "pink" };
    this.updateText = this.updateText.bind(this);
    this.setMirTextColor = this.setMirTextColor.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="source"
            id="source"
            onChange={this.updateText}
          />
        </td>
        <td>
          <button
            type="submit"
            onClick={this.setMirTextColor}
            style={{ color: this.state.mirTextColor }}
          >
            {this.state.mirroredText}
          </button>
        </td>
        <td align="left">
          <em>
            (change text and color using onKeyDown and this state allowing
            communication within class)
          </em>
        </td>
      </tr>
    );
  }
  updateText(event) {
    this.setState({
      mirroredText: event.target.value,
    });
  }
  setMirTextColor() {
    const newColor = validateColor(this.state.mirroredText);
    this.setState({ mirTextColor: newColor });
  }
}

function InputMirrorAsFunction() {
  const [mirroredText, setMirroredText] = useState("");
  const [mirTextColor, setMirTextColor] = useState("");
  const updateText = (event) => {
    setMirroredText(event.target.value + event.key);
  };
  const changeMirTextColor = () => {
    const newColor = validateColor(mirroredText);
    setMirTextColor(newColor);
  };
  return (
    <tr>
      <td>
        <input type="text" name="source" id="source" onKeyDown={updateText} />
      </td>
      <td>
        <button
          type="submit"
          onClick={changeMirTextColor}
          style={{ color: mirTextColor }}
        >
          {mirroredText}
        </button>
      </td>
      <td align="left">
        <em>(implementing the the text color changer as a function)</em>
      </td>
    </tr>
  );
}

function InputMirrorAsFunctionWithCallerPassToProps() {
  const [mirroredText, setMirroredText] = useState("");
  const [mirTextColor, setMirTextColor] = useState("");
  return (
    <tr>
      <InputMirrorTextReader setMirroredText={setMirroredText} />
      <InputMirrorColorButton
        mirTextColor={mirTextColor}
        setMirTextColor={setMirTextColor}
        mirroredText={mirroredText}
      />
      <td align="left">
        <em>
          (implementing the the text color changer as a function that delegates
          its state changer functions as callables to other external functions)
        </em>
      </td>
    </tr>
  );
}

function InputMirrorTextReader({ setMirroredText }) {
  const updateText = (event) => {
    setMirroredText(event.target.value + event.key);
  };
  return (
    <td>
      <input type="text" name="source" id="source" onKeyDown={updateText} />
    </td>
  );
}

function InputMirrorColorButton({
  mirroredText,
  mirTextColor,
  setMirTextColor,
}) {
  const changeMirTextColor = () => {
    const newColor = validateColor(mirroredText);
    setMirTextColor(newColor);
  };
  return (
    <td>
      <button
        type="submit"
        onClick={changeMirTextColor}
        style={{ color: mirTextColor }}
      >
        {mirroredText}
      </button>
    </td>
  );
}

function UlFromPropsWithList({
    items
}) {
  return (
    <tr>
      <td>
      <ul>
      { items.map( (item) => <li>{item}</li>) }
      </ul>
      </td>
      <td></td>
      <td align="left">
        <em>
          (using <code>map</code> for generating an unoredered list)
        </em>
      </td>
    </tr>
  );
}

function UlFromPropsWithObjDict() {
    const [entry, setEntry] = useConst([
        { key1: "input1", key2: "output1" },
        { key1: "input2", key2: "output2" },
        { key1: "input2", key2: "output3" },
    ])
  return (
    <tr>
      <td>
      <ul>
      { items.map( (item) => <li>{item.key1} -- {item.key2}</li>) }
      </ul>
      </td>
      <td></td>
      <td align="left">
        <em>
          (using <code>map</code> for generating an unoredered list)
        </em>
      </td>
    </tr>
  );
}
