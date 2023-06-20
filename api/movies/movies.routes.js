const express = require("express");
const router = express.Router();
const uploader = require("../../middleware/uploader");

const {
  movieCreate,
  //   movieGet,
  //   updateMovie,
  //   deleteMovie,
  //   rateMovie,
} = require("./movies.controllers");

// router.get("/", movieGet);
// router.put("/", updateMovie);
// router.delete("/", deleteMovie);
// router.post("/", rateMovie);
router.post("/", uploader.single("posterImage"), movieCreate);

module.exports = router;
