
# todo-list

**Route**
router.get("/todos", getAllTodo);
router.get("/todos/:id", getSingleTodo);
router.post("/todos", createTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

**Schema**: 
_id: mongoose ObjectId
title: String
content: String
createdDate: Date
completed: Boolean
