const Movie = require("../../models/Movie");

exports.movieCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = req.file.path.replace("\\", "/");
    }

    const newMovie = await Movie.create(req.body);
    return res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
    //return res.status(500).json({ message: "Something went wrong" });
  }
};
