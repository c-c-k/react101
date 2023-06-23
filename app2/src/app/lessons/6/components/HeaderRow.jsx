import { useContext } from "react";
import { HotelsListContext } from "./Contexts";

export default function HeaderRow() {
  const hotelsList = useContext(HotelsListContext);
  const headers = Object.keys(hotelsList[0]).map(
    (headerName, headerIndex) =>
      headerName != "id" && <th key={headerIndex}>{headerName}</th>
  );
  return (
    <thead>
      <tr> {headers} </tr>
    </thead>
  );
}
