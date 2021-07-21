const multer = require("multer");
const DatauriParser = require("datauri/parser");

const path = require("path");

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");
const parser = new DatauriParser();

const dataUri = async (req) => {
  console.log("datauri here");
  let fileType = path.extname(req.file.originalname).toString();
  console.log(typeof fileType);
  return parser.format(fileType, req.file.buffer).content;
};

module.exports = { multerUploads, dataUri };
