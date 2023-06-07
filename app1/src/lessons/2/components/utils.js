export function genRandomHexColorCode() {
  const codeDec = Math.trunc(Math.random() * 10 ** 6);
  const codeHex = codeDec.toString(16).padStart(6, "0");
  return "#" + codeHex;
}
