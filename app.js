const express = require ("express");
const app = express();


app.use(express.json());









app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
  