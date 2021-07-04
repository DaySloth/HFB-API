const base64 = require("base-64");
const utf8 = require("utf8");

module.exports = {
  encode: (text) => {
    let bytes = utf8.encode(text);
    let encoded = base64.encode(bytes);
    return encoded;
  },

  decode: (text) => {
    let bytes = base64.decode(text);
    let decoded = utf8.decode(bytes);
    return decoded;
  },
};
