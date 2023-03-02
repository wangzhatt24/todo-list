import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todolist-mg.controllers.js";

const router = express.Router();
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

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

router.get("/", (req, res) => {
  res.send("homes");
});

router.get("/todos", getAllTodo);
router.get("/todos/:id", getSingleTodo);
router.post("/todos", createTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
