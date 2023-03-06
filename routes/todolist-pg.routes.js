import express from "express";
import {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  dayReport,
  downloadTodoList,
  searchTodo,
} from "../controllers/todolist-pg.controllers.js";

const todoListRoutes = express.Router();

todoListRoutes.get("/", (req, res) => {
  res.send("homes");
});

todoListRoutes.get("/todos", getAllTodo);
todoListRoutes.get("/todos/download", downloadTodoList);
todoListRoutes.get("/todos/search", searchTodo);
todoListRoutes.get("/todos/:id", getSingleTodo);
todoListRoutes.post("/todos/report/", dayReport);
todoListRoutes.post("/todos", createTodo);
todoListRoutes.patch("/todos/:id", updateTodo);
todoListRoutes.delete("/todos/:id", deleteTodo);

export default todoListRoutes;
