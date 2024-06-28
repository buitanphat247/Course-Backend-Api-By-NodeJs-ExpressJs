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
// const upload_single_file = async (req, res) => {
//   const file_avatar = req.files.file_avatar;
//   const file_name_avatar = await getNewFileName(file_avatar.name);
//   const uploadPath =
//     path.resolve(__dirname, "../") +
//     "/public/images/upload/" +
//     file_name_avatar;
//   try {
//     await file_avatar.mv(uploadPath);
//     return {
//       error: 0,
//       data: req.files.file_avatar,
//       path: uploadPath,
//     };
//   } catch (error) {
//     return {
//       error: 1,
//       message: error,
//     };
//   }
// };

const upload_multiple_files = async (req, res) => {
  if (Array.isArray(req.files.file) === true) {
    let array_succes = [];
    let array_fail = [];
    let countSuccess = req.files.file.length;
    req.files.file.map(async (item, index) => {
      try {
        const file_name_avatar = await getNewFileName(item.name);
        const uploadPath =
          path.resolve(__dirname, "../") +
          "/public/images/upload/" +
          file_name_avatar;
        array_succes.push({
          originalName: item.name,
          newName: file_name_avatar,
          path: uploadPath,
          size: item.size,
          mimeType: item.mimetype,
        });
        await item.mv(uploadPath);
      } catch (error) {
        countSuccess--;
        array_fail.push({
          originalName: item.name,
          newName: file_name_avatar,
          path: null,
          size: item.size,
          mimeType: item.mimetype,
        });
      }
    });
    return {
      error: 0,
      data_succes: array_succes,
      data_fail: array_fail,
      count: countSuccess,
    };
  } else {
    const file_avatar = req.files.file;
    const file_name_avatar = await getNewFileName(file_avatar.name);
    const uploadPath =
      path.resolve(__dirname, "../") +
      "/public/images/upload/" +
      file_name_avatar;
    try {
      await file_avatar.mv(uploadPath);
      return {
        error: 0,
        data_succes: {
          originalName: file_avatar.name,
          newName: file_name_avatar,
          path: uploadPath,
          size: file_avatar.size,
          mimeType: file_avatar.mimetype,
        },
        data_fail: [],
        count: 1,
      };
    } catch (error) {
      return {
        error: 1,
        message: error,
      };
    }
  }
};

module.exports = { upload_multiple_files };
