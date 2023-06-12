import { useState } from "react";
import { tableData } from "./data";

export default function TableWithForm() {
  return (
    <>
      <table>
        <thead>
          <HeaderRow />
        </thead>
        <tbody>
          <RadioButtons />
          <TableDemoNestedAdderOnClick initTableData={tableData} />
          <TableDemoNestedAdderOnSubmit initTableData={tableData} />
          <TableDemoExternalAdder initTableData={tableData} />
        </tbody>
      </table>
    </>
  );
}

function HeaderRow() {
    return (
      <tr>
        <th>input</th>
        <th>content</th>
        <th>description</th>
      </tr>
    );
  }

function Description({ description }) {
  return (
    <td align="left">
      <em> ({description}) </em>
    </td>
  );
}

function RadioButtons() {
  const description = "Change style via radio button selection";
    const styleShow = { color:"gold", backgroundColor:"black" };
    const styleHide = { color:"black", backgroundColor:"black" };
    const [styling, setStyling] = useState(styleHide)
  return (
    <tr>
      <td>
        <label htmlFor="hide">hide</label>
        <input type="radio" name="toggle" id="hide" onChange={() => setStyling(styleHide)} />
        <label htmlFor="show">show</label>
        <input type="radio" name="toggle" id="show" onChange={() => setStyling(styleShow)} />
      </td>
      <td>
        <ul style={styling}>THE TRUTH</ul>
      </td>
      <Description description={description} />
    </tr>
  );
}

function TableDemoNestedAdderOnClick({ initTableData }) {
  const description = 'An updatable table that relies on: `<form ... <button ... type="submit" onClick={addRow}` + NESTED `addRow` function that uses `evt.target.form` to target the form input values.  DOES NOT REQUIRE `preventDefault` to avoid refreshing page.';
  const [tableData, setTableData] = useState(initTableData);
  const TableRow = ({ rowData }) => <tr>{rowCells(rowData)}</tr>;
  const rowCells = (rowData) =>
    Object.entries(rowData).map(([key, value]) => key != "id" && <td key={key}> {value} </td>);
  const tableRows = tableData.map((rowData) => (
    <TableRow key={rowData.id} rowData={rowData} />
  ));
  return (
    <tr>
      <td>
        <NewRowForm />
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>col 1 header</th>
              <th>col 2 header</th>
              <th>col 3 header</th>
              <th>col 4 header</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </td>
      <Description description={description} />
    </tr>
  );
  function NewRowForm() {
    const addRow = (evt) => {
      const form = evt.target.form;
      const new_entry = {
        id: tableData.length + 1,
        col_1: form.col_1.value,
        col_2: form.col_2.value,
        col_3: form.col_3.value,
        col_4: form.col_4.value,
      };
      setTableData([...tableData, new_entry]);
    };
    return (
      <form>
        <label htmlFor="col_1">col_1</label>
        <input type="text" name="col_1" id="col_1" /> <br />
        <label htmlFor="col_2">col_2</label>
        <input type="text" name="col_2" id="col_2" /> <br />
        <label htmlFor="col_3">col_3</label>
        <input type="text" name="col_3" id="col_3" /> <br />
        <label htmlFor="col_4">col_4</label>
        <input type="text" name="col_4" id="col_4" /> <br />
        <button id="add-row-button" type="submit" onClick={addRow}>
          Add
        </button>
      </form>
    );
  }
}

function TableDemoNestedAdderOnSubmit({ initTableData }) {
  const description =  'An updatable table that relies on: `<form onSubmit={addRow} ... <input type="submit"...` + NESTED `addRow` function that uses `evt.target` to target the form input values. DOES NOT REQUIRE `preventDefault` to avoid refreshing page.';
  const [tableData, setTableData] = useState(initTableData);
  const TableRow = ({ rowData }) => <tr>{rowCells(rowData)}</tr>;
  const rowCells = (rowData) =>
    Object.entries(rowData).map(([key, value]) => key != "id" && <td key={key}> {value} </td>);
  const tableRows = tableData.map((rowData) => (
    <TableRow key={rowData.id} rowData={rowData} />
  ));
  return (
    <tr>
      <td>
        <AddRow />
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>col 1 header</th>
              <th>col 2 header</th>
              <th>col 3 header</th>
              <th>col 4 header</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </td>
      <Description description={description} />
    </tr>
  );
  function AddRow() {
    const execAddRow = (evt) => {
        console.log(evt);
      const new_entry = {
        id: tableData.length + 1,
        col_1: evt.target.col_1.value,
        col_2: evt.target.col_2.value,
        col_3: evt.target.col_3.value,
        col_4: evt.target.col_4.value,
      };
      setTableData([...tableData, new_entry]);
    };
    return (
      <form onSubmit={execAddRow}>
        <label htmlFor="col_1">col_1</label>
        <input type="text" name="col_1" id="col_1" /> <br />
        <label htmlFor="col_2">col_2</label>
        <input type="text" name="col_2" id="col_2" /> <br />
        <label htmlFor="col_3">col_3</label>
        <input type="text" name="col_3" id="col_3" /> <br />
        <label htmlFor="col_4">col_4</label>
        <input type="text" name="col_4" id="col_4" /> <br />
        <input id="add-row-button" type="submit" value="Add" />
      </form>
    );
  }
}

function TableDemoExternalAdder({ initTableData }) {
  const description =  'An updatable table that relies on: `<form onSubmit={addRow} ... <input type="submit"...` + EXTERNAL `addRow` function that uses `evt.target` to target the form input values. REQUIRES `preventDefault` to avoid refreshing the page';
  const [tableData, setTableData] = useState(initTableData);
  const TableRow = ({ rowData }) => <tr>{rowCells(rowData)}</tr>;
  const rowCells = (rowData) =>
    Object.entries(rowData).map(([key, value]) => key != "id" && <td key={key}> {value} </td>);
  const tableRows = tableData.map((rowData) => (
    <TableRow key={rowData.id} rowData={rowData} />
  ));
  return (
    <tr>
      <td>
        <AddRow tableData={tableData} setTableData={setTableData} />
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th>col 1 header</th>
              <th>col 2 header</th>
              <th>col 3 header</th>
              <th>col 4 header</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </td>
      <Description description={description} />
    </tr>
  );
}

function AddRow({tableData, setTableData}) {
  const execAddRow = (evt) => {
    evt.preventDefault();
      console.log(evt);
    const new_entry = {
      id: tableData.length + 1,
      col_1: evt.target.col_1.value,
      col_2: evt.target.col_2.value,
      col_3: evt.target.col_3.value,
      col_4: evt.target.col_4.value,
    };
    setTableData([...tableData, new_entry]);
  };
  return (
    <form onSubmit={execAddRow}>
      <label htmlFor="col_1">col_1</label>
      <input type="text" name="col_1" id="col_1" /> <br />
      <label htmlFor="col_2">col_2</label>
      <input type="text" name="col_2" id="col_2" /> <br />
      <label htmlFor="col_3">col_3</label>
      <input type="text" name="col_3" id="col_3" /> <br />
      <label htmlFor="col_4">col_4</label>
      <input type="text" name="col_4" id="col_4" /> <br />
      <input id="add-row-button" type="submit" value="Add" />
    </form>
  );
}

