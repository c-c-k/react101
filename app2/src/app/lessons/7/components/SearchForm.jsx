import { useContext } from "react";
import {
  HotelFilterContext,
  SetHotelFilterContext,
  RoomTypeContext,
} from "./Contexts";

export default function SearchForm() {
  return (
    <form>
      <CityField />
      <HotelField />
      <RoomField />
      <BreakfastField />
    </form>
  );
}

function CityField() {
  return <TextSearchField name="city" label="City" />;
}

function HotelField() {
  return <TextSearchField name="hotel" label="Hotel" />;
}

function RoomField() {
  const roomOptionsEnum = useContext(RoomTypeContext);
  const roomOptionsList = Object.keys(roomOptionsEnum);
  return (
    <MultiSelectionField name="room" label="Room" options={roomOptionsList} />
  );
}

function BreakfastField() {
  return <SingleCheckBox name="breakfast" label="Breakfast" />;
}

function SingleCheckBox({ name, label }) {
  const hotelFilter = useContext(HotelFilterContext);
  const setHotelFilter = useContext(SetHotelFilterContext);

  const inputHandler = () => {
    const newFilter = { ...hotelFilter };
    newFilter[name] = !newFilter[name];
    setHotelFilter(newFilter);
  };

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input type="checkbox" id={name} name={name} onChange={inputHandler} />
    </>
  );
}

function MultiSelectionField({ name, label, options }) {
  const hotelFilter = useContext(HotelFilterContext);
  const setHotelFilter = useContext(SetHotelFilterContext);

  const inputHandler = (e) => {
    const newFilter = { ...hotelFilter };
    let selectedValues = [];
    for (let i = 0, len = e.target.length; i < len; i++) {
      if (e.target.options[i].selected) {
        selectedValues.push(e.target.options[i].value);
      }
    }
    newFilter[name] = selectedValues;
    setHotelFilter(newFilter);
  };

  const optionComponents = options.map((optionName, optionIndex) => (
    <option key={optionIndex} value={optionName}>
      {optionName}
    </option>
  ));

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <select id={name} name={name} multiple={true} onChange={inputHandler}>
        {optionComponents}
      </select>
    </>
  );
}

function TextSearchField({ name, label }) {
  const hotelFilter = useContext(HotelFilterContext);
  const setHotelFilter = useContext(SetHotelFilterContext);

  const inputHandler = (e) => {
    const newFilter = { ...hotelFilter };
    newFilter[name] = e.target.value;
    setHotelFilter(newFilter);
  };

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input id={name} name={name} onChange={inputHandler} />
    </>
  );
}
