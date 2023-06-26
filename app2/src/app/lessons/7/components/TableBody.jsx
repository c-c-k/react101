import { useContext } from "react";
import { hotelFilterFunc } from "./utils";
import {
  HotelsListContext,
  HotelFilterContext,
  HotelEntryContext,
} from "./Contexts";

export default function TableBody() {
  const hotelsList = useContext(HotelsListContext);
  const hotelFilterSelections = useContext(HotelFilterContext);
  const filteredHotelList = hotelsList.filter(
    hotelFilterFunc,
    hotelFilterSelections
  );

  const FilteredHotelRows = filteredHotelList.map((hotelEntry) => (
    <HotelInfoRow key={hotelEntry.id} hotelEntry={hotelEntry} />
  ));

  return FilteredHotelRows ? <tbody>{FilteredHotelRows}</tbody> : <></>;
}

function HotelInfoRow({ hotelEntry }) {
  return (
    <tr>
      <HotelEntryContext.Provider value={hotelEntry}>
        <CityColumn />
        <HotelColumn />
        <RoomColumn />
        <BreakfastColumn />
      </HotelEntryContext.Provider>
    </tr>
  );
}

function CityColumn() {
  const entry = useContext(HotelEntryContext);
  return <TextColumn value={entry.city} />;
}

function HotelColumn() {
  const entry = useContext(HotelEntryContext);
  return <TextColumn value={entry.hotel} />;
}

function RoomColumn() {
  const entry = useContext(HotelEntryContext);
  return <TextColumn value={entry.room} />;
}

function BreakfastColumn() {
  const entry = useContext(HotelEntryContext);
  return <YesNoColumn value={entry.breakfast} />;
}

function TextColumn({ value }) {
  return <td>{value}</td>;
}

function YesNoColumn({ value }) {
  return <td>{value ? "Yes" : "No"}</td>;
}
