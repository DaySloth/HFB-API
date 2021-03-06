const multer = require("multer");
const DatauriParser = require("datauri/parser");

const path = require("path");

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");
const parser = new DatauriParser();

const dataUri = async (req) => {
  let fileType = path.extname(req.file.originalname).toString();
  return parser.format(fileType, req.file.buffer).content;
};

module.exports = { multerUploads, dataUri };
