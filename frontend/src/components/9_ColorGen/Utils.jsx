const ComponentTohex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};
const rgbToHex = (r, g, b) => {
  return '#' + ComponentTohex(r) + ComponentTohex(g) + ComponentTohex(b);
};
export default rgbToHex;
