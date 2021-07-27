const express = require("express");
// var mongoose = require("mongoose");
// var Grid = require("gridfs-stream");
const {
  createcompany,
  getAllCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controller/company.js");

const { uploadImage, getImage } = require("../controller/uploadLogo.js");
const upload = require("../utils/uploadlogo.js");

const router = express.Router();


// ROUTES FOR THE Company MANAGEMENT
// router.post("/createcompany", createCompany);
router.post("/createcompany", createcompany)
router.get("/getallcompanies", getAllCompany);
router.get("/getByIdcompany/:id", getCompany);
router.post("/updatecompany/:id", updateCompany);
router.delete("/deletecompany/:id", deleteCompany);


// upload is middleware to upload single file
router.post("/file", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

module.exports = router;
