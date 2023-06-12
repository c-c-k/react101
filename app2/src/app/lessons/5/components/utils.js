export function validateColor(colorString) {
  const s = new Option().style;
  s.color = colorString;
  const newColor = s.color == colorString.toLowerCase() ? colorString : "black";
  return newColor;
}
