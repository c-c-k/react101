import { Component, useState } from "react";
import { validateColor } from "./utils";

export default function KeyChange() {
    return (
      <>
        <table>
          <thead>
            <HeaderRow />
          </thead>
          <tbody>
            <InputMirror />
            <InputMirrorAsFunction />
            <InputMirrorAsFunctionWithCallerPassToProps />
            <UlFromPropsWithList items={["item1", "item2", "item3"]} />
            <UlFromPropsWithObjDict />
          </tbody>
        </table>
      </>
    );
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

function Description({ description }) {
  return (
    <td align="left">
      <em> ({description}) </em>
    </td>
  );
}

class InputMirror extends Component {
  constructor(props) {
    super(props);
    this.state = { mirroredText: "", mirTextColor: "pink" };
    this.updateText = this.updateText.bind(this);
    this.setMirTextColor = this.setMirTextColor.bind(this);
    this.description =
      "change text and color using onKeyDown and this state allowing communication within class";
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
        <Description description={this.description} />
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
  const description = "implementing the the text color changer as a function";
  const [mirText, setMirText] = useState("");
  const [mirTextColor, setMirTextColor] = useState("");
  const updateText = (event) => {
    setMirText(event.target.value + event.key);
  };
  const changeMirTextColor = () => {
    const newColor = validateColor(mirText);
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
          {mirText}
        </button>
      </td>
      <Description description={description} />
    </tr>
  );
}

function InputMirrorAsFunctionWithCallerPassToProps() {
  const description =
    "implementing the the text color changer as a function that delegates its state changer functions as callables to other external functions";
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
      <Description description={description} />
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

function UlFromPropsWithList({ items }) {
  const description =
    "using map for generating an unoredered list from a simple array of strings, the array index is used as the list key, this is ok for static lists but can cause unexpected behaviour for non-static lists.";
  const listItems = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <tr>
      <td> --None-- </td>
      <td>
        <ul> {listItems} </ul>
      </td>
      <Description description={description} />
    </tr>
  );
}

function UlFromPropsWithObjDict() {
  const description =
    "using map for generating an unoredered list from an array of objects, each object has an id property which is used as the list key, this is the standard/prefered/safe way of generating dynamic list components.";
  const entry = [
    { id: "id_1", value: "value 1" },
    { id: "id_2", value: "value 2" },
    { id: "id_3", value: "value 3" },
  ];
  const listItems = entry.map((item) => (
    <li key={item.id} id={item.id}>
      {item.value}
    </li>
  ));
  return (
    <tr>
      <td> --None-- </td>
      <td>
        <ul>{listItems}</ul>
      </td>
      <Description description={description} />
    </tr>
  );
}
