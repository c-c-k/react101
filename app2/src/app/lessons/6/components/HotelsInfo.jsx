import { useState } from "react";
import { HotelFilterContext, SetHotelFilterContext } from "./Contexts";
import SearchForm from "./SearchForm";
import HeaderRow from "./HeaderRow";
import TableBody from "./TableBody";

export default function HotelsInfo() {
  const [hotelFilter, setHotelFilter] = useState({
    city: "",
    hotel: "",
    room: [],
    breakfast: false,
  });
  return (
    <>
      <HotelFilterContext.Provider value={hotelFilter}>
        <SetHotelFilterContext.Provider value={setHotelFilter}>
          <SearchForm />
        </SetHotelFilterContext.Provider>
        <table>
          <HeaderRow />
          <TableBody />
        </table>
      </HotelFilterContext.Provider>
    </>
  );
}
