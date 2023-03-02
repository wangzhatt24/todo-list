import TodoModel from "../models/todolist-pg.models.js";

export async function createTodo(req, res) {
  const todo = TodoModel.build({
    title: req.body.title,
    content: req.body.content,
    completed: req.body.completed,
  });

  await todo
    .save()
    .then((todo) => {
      res.status(201).json({
        success: true,
        message: "New Todo created sucessfully",
        todo: todo,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    });
}

export async function getAllTodo(req, res) {
  await TodoModel.findAll()
    .then((listTodo) => {
      res.status(200).json({
        success: true,
        message: "List all todo",
        todos: listTodo,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    });
}

export async function getSingleTodo(req, res) {
  const todoId = req.params.id;

  await TodoModel.findAll({
    where: {
      id: todoId,
    },
  })
    .then((todo) => {
      res.status(200).json({
        success: true,
        message: `Get single todo`,
        Todo: todo,
      });
    })
    .catch((error) =>
      res.status(500).json({
        success: false,
        message: "This todo is not exist",
        error: error.message,
      })
    );
}

export async function updateTodo(req, res) {
  //get field need to be update
  const todoId = req.params.id;

  await TodoModel.update(
    {
      title: req.body.title,
      content: req.body.content,
      completed: req.body.completed,
    },
    {
      where: {
        id: todoId,
      },
    }
  )
    .then(() => res.status(200).json({ success: true, message: "Updated" }))
    .catch((error) =>
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      })
    );
}

export async function deleteTodo(req, res) {
  //get field id is to be delete
  const todoId = req.params.id;

  await TodoModel.destroy({
    where: {
      id: todoId,
    },
  })
    .then(() => res.status(200).json({ success: true, message: "Deleted" }))
    .catch((error) =>
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      })
    );
}
