import { createEnum } from "./utils";

export const roomType = createEnum(["Single", "Double", "Suite"]);

export const sampleHotelsList = [
  {
    id: "1",
    city: "city 1",
    hotel: "hotel 1 A",
    room: roomType.Single,
    breakfast: true,
  },
  {
    id: "2",
    city: "city 1",
    hotel: "hotel 1 A",
    room: roomType.Double,
    breakfast: true,
  },
  {
    id: "3",
    city: "city 1",
    hotel: "hotel 1 A",
    room: roomType.Suite,
    breakfast: true,
  },
  {
    id: "4",
    city: "city 1",
    hotel: "hotel 1 B",
    room: roomType.Single,
    breakfast: true,
  },
  {
    id: "5",
    city: "city 1",
    hotel: "hotel 1 B",
    room: roomType.Double,
    breakfast: true,
  },
  {
    id: "6",
    city: "city 2",
    hotel: "hotel 2 A",
    room: roomType.Single,
    breakfast: false,
  },
  {
    id: "7",
    city: "city 2",
    hotel: "hotel 2 A",
    room: roomType.Double,
    breakfast: false,
  },
  {
    id: "8",
    city: "city 2",
    hotel: "hotel 2 A",
    room: roomType.Suite,
    breakfast: true,
  },
];
