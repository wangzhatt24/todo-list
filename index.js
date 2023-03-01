//todo list api
import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/todolist.routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";

//init
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

//set up logger
app.use(morgan("combined"));

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set up route
app.use(apiRoutes);

//set up mongoose
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
    console.log(error);
  });

//server listen
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
