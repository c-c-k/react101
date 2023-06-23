import { createContext } from "react";
import { roomType, sampleHotelsList } from "./data.js";

export const HotelEntryContext = createContext();
export const HotelFilterContext = createContext();
export const HotelsListContext = createContext(sampleHotelsList);
export const RoomTypeContext = createContext(roomType);
export const SetHotelFilterContext = createContext();
