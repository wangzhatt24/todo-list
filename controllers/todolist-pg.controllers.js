import { TodoModel } from "../models/index.model.js";
import { Op } from "sequelize";
import { downloadResource } from "../utils/util.js";

export async function createTodo(req, res) {
  const todo = TodoModel.build({
    title: req.body.title,
    content: req.body.content,
    planedFinish: req.body.planedFinish,
    delayed: req.body.delayed,
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
      planedFinish: req.body.planedFinish,
      delayed: req.body.delayed,
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

export async function downloadTodoList(req, res) {
  const data = await TodoModel.findAll().catch((err) =>
    res.status(500).json({
      success: false,
      message: "Unknown error occurred",
      error: err,
    })
  );

  const fields = [
    {
      id: "id",
      value: "id",
    },
    {
      title: "title",
      value: "title",
    },
    {
      content: "content",
      value: "content",
    },
    {
      planedFinish: "planedFinish",
      value: "planedFinish",
    },
    {
      delayed: "delayed",
      value: "delayed",
    },
    {
      completed: "completed",
      value: "completed",
    },
    {
      createdAt: "createdAt",
      value: "createdAt",
    },
    {
      updatedAt: "updatedAt",
      value: "updatedAt",
    },
  ];

  return downloadResource(res, "todolist.csv", fields, data);
}

export async function searchTodo(req, res) {
  // Chưa dùng sequelize để truy vấn và sắp xếp -> bad

  const filters = req.query;
  console.log(`filters: ${filters}`);
  console.log(filters.sort);
  //nếu tồn tại sort thì là có yêu cầu sắp xếp theo trường
  const data = await TodoModel.findAll().catch((err) =>
    res.status(500).json({
      success: false,
      message: "Unknown error occurred",
      error: err,
    })
  );

  const filteredTodos = data.filter((todo) => {
    let isValid = true;
    for (const key in filters) {
      // console.log(`compared: `, key, todo[key], filters[key]);
      isValid = isValid && todo[key] == filters[key];
    }
    return isValid;
  });

  res.status(200).json({
    success: true,
    message: "Filter successfully",
    todos: filteredTodos,
  });
}

//day report
export async function dayReport(req, res) {
  const day = new Date(req.body.dayToReport);
  console.log(`day: ${day.getDate()} - ${day.getMonth()} `);

  TodoModel.findAll({
    where: {
      createdAt: {
        [Op.eq]: day,
      },
    },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
}

/*- report tuần hiện tại: Thứ 2 của tuần -> ngày hiện tại */
export async function weeklyReportThisWeek(req, res) {}

/*- report tuần bất kì: nhận vào 1 ngày xử lí từ Thứ 2 của tuần đó -> ngày đã nhận*/
export async function weeklyReportSpecifiedWeek(req, res) {}
