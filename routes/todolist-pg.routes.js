import express from "express";
import TodoPgModel from "../models/todolist-pg.models.js";
import {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todolist-pg.controllers.js";

const todoListRoutes = express.Router();

//create table
try {
  await TodoPgModel.sync();
  console.log("Table created!");
} catch (error) {
  console.log(error);
}

todoListRoutes.get("/", (req, res) => {
  res.send("homes");
});

todoListRoutes.get("/todos", getAllTodo);
todoListRoutes.get("/todos/:id", getSingleTodo);
todoListRoutes.post("/todos", createTodo);
todoListRoutes.patch("/todos/:id", updateTodo);
todoListRoutes.delete("/todos/:id", deleteTodo);

export default todoListRoutes;
