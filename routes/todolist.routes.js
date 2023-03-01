import express from "express";
import {
  createTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todolist.controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("homes");
});

router.get("/todos", getAllTodo);
router.get("/todos/:id", getSingleTodo);
router.post("/todos", createTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
