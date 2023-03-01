
# todo-list

**Route**
<br> router.get("/todos", getAllTodo); 
<br> router.get("/todos/:id", getSingleTodo);
<br> router.post("/todos", createTodo);
<br> router.patch("/todos/:id", updateTodo);
<br> router.delete("/todos/:id", deleteTodo);

**Schema**: 
<br> _id: mongoose ObjectId
<br> title: String
<br> content: String
<br> createdDate: Date
<br> completed: Boolean
