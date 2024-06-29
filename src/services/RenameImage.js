const path = require("path");

const getNewFileName = (originalName) => {
  const extension = path.extname(originalName);
  let baseName = path.basename(originalName, extension);
  baseName = baseName.replace(/\s+/g, "_"); // Replace spaces with underscores
  const date = new Date();
  const formattedDate = date
    .toISOString()
    .replace(/T/, "_")
    .replace(/\..+/, "")
    .replace(/:/g, "")
    .replace(/-/g, "");
  return `${baseName}_${formattedDate}${extension}`;
};

module.exports = getNewFileName;
