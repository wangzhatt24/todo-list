import mongoose from "mongoose";
import Todo from "../models/todolist-mg.models.js";

export async function createTodo(req, res) {
  const todo = new Todo({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
    createdDate: req.body.createdDate,
    updatedDate: new Date(),
    completed: req.body.completed,
  });

  try {
    todo.save().then((newTodo) => {
      return res.status(201).json({
        success: true,
        message: "New Todo created successfully",
        Todo: newTodo,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}

export async function getAllTodo(req, res) {
  Todo.find()
    .select("_id title content createdDate completed")
    .then((allTodo) => {
      return res.status(200).json({
        success: true,
        message: "List all todo",
        Todos: allTodo,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: err.message,
      });
    });
}

export async function getSingleTodo(req, res) {
  const id = req.params.id;

  Todo.findById(id)
    .then((singleTodo) => {
      res.status(200).json({
        success: true,
        message: `Todo: ${singleTodo.title}`,
        Todo: singleTodo,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "This todo does not exist",
        error: err.message,
      });
    });
}

export async function updateTodo(req, res) {
  const id = req.params.id;
  const updateObject = req.body;

  Todo.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Todo is updated",
        updateTodo: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    });
}

export async function deleteTodo(req, res) {
  const id = req.params.id;

  Todo.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Delete todo successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    });
}
