import multer from "multer";
// import path from "path";
// import { v4 } from "uuid";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: function (req, file, cb) {
//     const names = file.originalname.split(".");
//     cb(null, v4() + "." + names[names.length - 1]);
//   },
// });

export const upload = multer({ storage: multer.memoryStorage() });
