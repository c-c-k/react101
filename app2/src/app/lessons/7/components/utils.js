export function createEnum(values) {
  const enumObj = {};
  for (let value of values) {
    enumObj[value] = value;
  }
  return Object.freeze(enumObj);
}

export function hotelFilterFunc(hotel) {
  const hotelFilterSelections = this;
  const hotelFilterTests = [
    breakfastTest,
    cityNameTest,
    hotelNameTest,
    roomTypeTest,
  ];
  for (let hotelFilterTest of hotelFilterTests) {
    if (!hotelFilterTest(hotel, hotelFilterSelections)) {
      return false;
    }
  }
  return true;
}

const cityNameTest = (hotelEntry, hotelFilterSelections) =>
  textInclusionTest(hotelEntry, "city", hotelFilterSelections);

const hotelNameTest = (hotelEntry, hotelFilterSelections) =>
  textInclusionTest(hotelEntry, "hotel", hotelFilterSelections);

const roomTypeTest = (hotel, hotelFilterSelections) =>
  hotelFilterSelections.room.length == 0 ||
  hotelFilterSelections.room.includes(hotel.room);

const breakfastTest = (hotel, hotelFilterSelections) =>
  !hotelFilterSelections.breakfast || hotel.breakfast;

const textInclusionTest = (entry, field, filterSelection) =>
  filterSelection[field] == "" ||
  entry[field].toLowerCase().includes(filterSelection[field].toLowerCase());
