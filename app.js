const express = require("express");
const app = express();
const path = require("path");
const notfound = require("./middleware/notfound");
const errorhandle = require("./middleware/errorhandle");
const connectDB = require("./database");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const moviesRoutes = require("./api/movies/movies.routes");
dotEnv.config();

connectDB();

app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));
app.use(express.json());

app.use("/movies", moviesRoutes);
app.use(notfound);
app.use(errorhandle);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
