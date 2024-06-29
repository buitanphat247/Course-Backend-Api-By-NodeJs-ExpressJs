const path = require("path");
const getNewFileName = require("./RenameImage");
const upload_single_file = async (req, res) => {
  const file_avatar = req.files.file;
  const file_name_avatar = getNewFileName(file_avatar.name);
  const uploadPath =
    path.resolve(__dirname, "../") +
    "/public/images/upload/" +
    file_name_avatar;
  try {
    await file_avatar.mv(uploadPath);
    return {
      error: 0,
      message: "Upload success",
      success_path: uploadPath,
    };
  } catch (error) {
    return {
      error: 1,
      message: error,
      success_path: [],
    };
  }
};
const upload_multiple_files = async (req, res) => {
  const data_success = [];
  for (const item of req.files.file) {
    const file_name_avatar = getNewFileName(item.name);
    const uploadPath =
      path.resolve(__dirname, "../") +
      "/public/images/upload/" +
      file_name_avatar;
    try {
      await item.mv(uploadPath);
      data_success.push(uploadPath);
    } catch (error) {
      data_failed.push(uploadPath);
    }
  }
  return {
    error: data_failed.length,
    message: "Upload success",
    success_path: data_success,
  };
};

module.exports = { upload_multiple_files, upload_single_file };
